// TeacherSection.js
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const TeacherSection = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/teachers/getall"
      );
      setTeachers(response.data.teachers);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-64 p-6 ml-4">
        {" "}
        {/* Adjusting margin-left for spacing */}
        <h1 className="text-2xl font-bold mb-4">Teachers</h1>
        <ul className="space-y-4">
          {teachers.map((teacher) => (
            <li
              key={teacher.id}
              className="p-4 border border-gray-200 rounded-lg shadow-md"
            >
              <span className="font-semibold">{teacher.name}</span> -{" "}
              {teacher.email} - {teacher.subject}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeacherSection;
