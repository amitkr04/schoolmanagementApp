// StudentSection.js
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const StudentSection = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/students/getall"
      );
      setStudents(response.data.students);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-64 p-6 ml-4">
        {" "}
        {/* Adjusting margin-left for spacing */}
        <h1 className="text-2xl font-bold mb-4">Students</h1>
        <ul className="space-y-4">
          {students.map((student) => (
            <li
              key={student.id}
              className="p-4 border border-gray-200 rounded-lg shadow-md"
            >
              <span className="font-semibold">{student.name}</span> -{" "}
              {student.registrationNumber} - {student.grade}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudentSection;
