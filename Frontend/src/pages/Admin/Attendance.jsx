import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const Attendance = () => {
  const [students, setStudents] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("/api/v1/students/getall");
      setStudents(response.data.students);
      initializeAttendanceData(response.data.students);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };
  const initializeAttendanceData = (students) => {
    const initialAttendanceData = students.map((student) => ({
      id: student.id,
      name: student.name,
      status: "Present",
    }));
    setAttendanceData(initialAttendanceData);
  };

  const handleStatusChange = (id, status) => {
    const updatedData = attendanceData.map((student) => {
      if (student.id === id) {
        return { ...student, status };
      }
      return student;
    });
    setAttendanceData(updatedData);
  };

  const handleSubmit = async () => {
    try {
      const formattedData = attendanceData.map(({ id, name, status }) => ({
        studentId: id,
        name,
        status,
      }));
      const response = await axios.post("/api/v1/attendance/", {
        attendanceData: formattedData,
      });
      console.log("Attendance data submitted:", response.data);
    } catch (error) {
      console.error("Error submitting attendance data:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 pl-64 p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold mb-6">Attendance</h1>
          <div className="space-y-4">
            {students.map((student, index) => (
              <div key={student.id} className="border-b pb-4 mb-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{student.name}</span>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                        checked={attendanceData[index]?.status === "Present"}
                        onChange={() =>
                          handleStatusChange(student.id, "Present")
                        }
                      />
                      <span>Present</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                        checked={attendanceData[index]?.status === "Absent"}
                        onChange={() =>
                          handleStatusChange(student.id, "Absent")
                        }
                      />
                      <span>Absent</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                        checked={
                          attendanceData[index]?.status ===
                          "Absent with apology"
                        }
                        onChange={() =>
                          handleStatusChange(student.id, "Absent with apology")
                        }
                      />
                      <span>Absent with apology</span>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="mt-6 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-500 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
