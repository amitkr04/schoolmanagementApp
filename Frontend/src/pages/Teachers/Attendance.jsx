// CheckAttendanceSection.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const CheckAttendanceSection = () => {
  const [students, setStudents] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/students/getall"
      );
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
      status: "Present", // Default to 'Present'
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
      // Send attendance data to the database
      const formattedData = attendanceData.map(({ id, name, status }) => ({
        studentId: id,
        name,
        status,
      }));
      const response = await axios.post(
        "http://localhost:4000/api/v1/attendance",
        { attendanceData: formattedData }
      );
      console.log("Attendance data submitted:", response.data);
    } catch (error) {
      console.error("Error submitting attendance data:", error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-64 p-6 ml-4">
        <h1 className="text-2xl font-bold mb-4">Attendance</h1>
        <div className="bg-white shadow-md rounded p-6">
          <ul className="space-y-4">
            {students.map((student) => (
              <li
                key={student.id}
                className="flex items-center justify-between border-b last:border-b-0 py-2"
              >
                <span className="flex-1">{student.name}</span>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={
                        attendanceData.find((s) => s.id === student.id)
                          ?.status === "Present"
                      }
                      onChange={() => handleStatusChange(student.id, "Present")}
                      className="mr-2"
                    />
                    Present
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={
                        attendanceData.find((s) => s.id === student.id)
                          ?.status === "Absent"
                      }
                      onChange={() => handleStatusChange(student.id, "Absent")}
                      className="mr-2"
                    />
                    Absent
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={
                        attendanceData.find((s) => s.id === student.id)
                          ?.status === "Absent with apology"
                      }
                      onChange={() =>
                        handleStatusChange(student.id, "Absent with apology")
                      }
                      className="mr-2"
                    />
                    Absent with apology
                  </label>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={handleSubmit}
            className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckAttendanceSection;
