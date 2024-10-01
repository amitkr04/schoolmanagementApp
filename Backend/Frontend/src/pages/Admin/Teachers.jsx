import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const Teachers = () => {
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const [teachers, setTeachers] = useState([]);

  // Fetch teachers on component mount
  useEffect(() => {
    fetchTeachers();
  }, []);

  // Fetch all teachers
  const fetchTeachers = async () => {
    try {
      const response = await axios.get("/api/v1/teachers/getall");
      setTeachers(response.data.teachers); // Make sure response is valid
    } catch (error) {
      console.error("Error fetching teachers:", error);
    }
  };

  // Add a new teacher
  const handleAddTeacher = async (e) => {
    e.preventDefault();
    if (
      newTeacher.name.trim() !== "" &&
      newTeacher.email.trim() !== "" &&
      newTeacher.subject.trim() !== ""
    ) {
      try {
        const response = await axios.post("/api/v1/teachers", newTeacher);
        const createdTeacher = response.data.teacher;

        // Update the state with the new teacher
        setTeachers((prevTeachers) => [...prevTeachers, createdTeacher]);

        // Clear the form fields
        setNewTeacher({ name: "", email: "", subject: "" });
      } catch (error) {
        console.error("Error adding teacher:", error);
      }
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 pl-64 p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">Teachers</h1>
          <form onSubmit={handleAddTeacher} className="mb-6 grid gap-4">
            <input
              type="text"
              placeholder="Enter teacher name"
              value={newTeacher.name}
              onChange={(e) =>
                setNewTeacher({ ...newTeacher, name: e.target.value })
              }
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Enter teacher email"
              value={newTeacher.email}
              onChange={(e) =>
                setNewTeacher({ ...newTeacher, email: e.target.value })
              }
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Enter teacher subject"
              value={newTeacher.subject}
              onChange={(e) =>
                setNewTeacher({ ...newTeacher, subject: e.target.value })
              }
              className="p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Teacher
            </button>
          </form>

          {/* Safely map over teachers array */}
          <ul className="space-y-4">
            {teachers && teachers.length > 0 ? (
              teachers.map((teacher) => (
                <li
                  key={teacher._id}
                  className="p-4 bg-gray-100 border rounded"
                >
                  {teacher.name} - {teacher.email} - {teacher.subject}
                </li>
              ))
            ) : (
              <p>No teachers available</p> // Handle empty state
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
