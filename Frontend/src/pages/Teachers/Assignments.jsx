// AssignmentSection.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const AssignmentSection = () => {
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    grade: "",
    deadline: "",
  });
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/assignments/getall"
      );
      setAssignments(response.data.assignments);
    } catch (error) {
      console.error("Error fetching assignments:", error);
    }
  };

  const handleAddAssignment = async (e) => {
    e.preventDefault();
    if (
      newAssignment.title.trim() !== "" &&
      newAssignment.description.trim() !== "" &&
      newAssignment.grade.trim() !== "" &&
      newAssignment.deadline.trim() !== ""
    ) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/v1/assignments",
          newAssignment
        );
        setAssignments([...assignments, response.data.assignment]);
        setNewAssignment({
          title: "",
          description: "",
          grade: "",
          deadline: "",
        });
      } catch (error) {
        console.error("Error adding assignment:", error);
      }
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-64 p-6 ml-4">
        {" "}
        {/* Adjusting margin-left for spacing */}
        <h1 className="text-2xl font-bold mb-4">Assignments</h1>
        <form onSubmit={handleAddAssignment} className="mb-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter assignment title"
              value={newAssignment.title}
              onChange={(e) =>
                setNewAssignment({ ...newAssignment, title: e.target.value })
              }
              className="w-[50%] p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Enter assignment description"
              value={newAssignment.description}
              onChange={(e) =>
                setNewAssignment({
                  ...newAssignment,
                  description: e.target.value,
                })
              }
              className="w-[50%] p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              rows={4}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter assignment grade"
              value={newAssignment.grade}
              onChange={(e) =>
                setNewAssignment({ ...newAssignment, grade: e.target.value })
              }
              className="w-[50%] p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter assignment deadline"
              value={newAssignment.deadline}
              onChange={(e) =>
                setNewAssignment({ ...newAssignment, deadline: e.target.value })
              }
              className="w-[50%] p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Add Assignment
          </button>
        </form>
        <h2 className="text-xl font-semibold mb-4">Assignment List</h2>
        <ul className="space-y-4">
          {assignments.map((assignment) => (
            <li
              key={assignment.id}
              className="p-4 border border-gray-200 rounded-lg"
            >
              <strong>{assignment.title}:</strong> {assignment.description},{" "}
              {assignment.grade}, {assignment.deadline}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AssignmentSection;
