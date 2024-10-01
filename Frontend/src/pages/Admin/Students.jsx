import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const Students = () => {
  const [newStudent, setNewStudent] = useState({
    name: "",
    registrationNumber: "",
    grade: "",
  });
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("/api/v1/students/getall");
      setStudents(response.data.students);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();

    if (
      newStudent.name.trim() !== "" &&
      newStudent.registrationNumber.trim() !== "" &&
      newStudent.grade.trim() !== ""
    ) {
      try {
        const response = await axios.post("/api/v1/students", newStudent);

        // Check if the response contains the newly created student
        if (response.data && response.data.student) {
          // Update the state with the newly added student
          setStudents((prevStudents) => [
            ...prevStudents,
            response.data.student,
          ]);
          setNewStudent({ name: "", registrationNumber: "", grade: "" }); // Clear form fields
        } else {
          console.error("Error: Student was not added properly", response.data);
        }
      } catch (error) {
        console.error("Error adding student:", error);
      }
    } else {
      console.error("Error: Please fill in all fields.");
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-64 p-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Students</h1>

          {/* Add Student Form */}
          <form className="mb-6 flex space-x-4" onSubmit={handleAddStudent}>
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter student name"
              value={newStudent.name}
              onChange={(e) =>
                setNewStudent({ ...newStudent, name: e.target.value })
              }
            />
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter registration number"
              value={newStudent.registrationNumber}
              onChange={(e) =>
                setNewStudent({
                  ...newStudent,
                  registrationNumber: e.target.value,
                })
              }
            />
            <input
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter grade"
              value={newStudent.grade}
              onChange={(e) =>
                setNewStudent({ ...newStudent, grade: e.target.value })
              }
            />
            <button
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              type="submit"
            >
              Add Student
            </button>
          </form>

          {/* Student List */}
          <ul className="bg-white shadow overflow-hidden rounded-lg divide-y divide-gray-200">
            {students.map((student) => (
              <li
                key={student.id}
                className="p-4 flex justify-between items-center"
              >
                <span className="text-lg font-medium text-gray-700">
                  {student.name}
                </span>
                <span className="text-sm text-gray-500">
                  {student.registrationNumber}
                </span>
                <span className="text-sm text-gray-500">{student.grade}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Students;
