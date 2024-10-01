import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const Assignments = () => {
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
      const response = await axios.get("/api/v1/assignments/getall");
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
        const response = await axios.post("/api/v1/assignments", newAssignment);
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
      <div className="flex-1 pl-64 p-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Assignments</h1>

          {/* Add Assignment Form */}
          <form
            className="mb-6 flex flex-col space-y-4"
            onSubmit={handleAddAssignment}
          >
            <input
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter assignment title"
              value={newAssignment.title}
              onChange={(e) =>
                setNewAssignment({ ...newAssignment, title: e.target.value })
              }
            />
            <textarea
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter assignment description"
              value={newAssignment.description}
              onChange={(e) =>
                setNewAssignment({
                  ...newAssignment,
                  description: e.target.value,
                })
              }
            />
            <input
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter assignment grade"
              value={newAssignment.grade}
              onChange={(e) =>
                setNewAssignment({ ...newAssignment, grade: e.target.value })
              }
            />
            <input
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              placeholder="Enter assignment deadline"
              value={newAssignment.deadline}
              onChange={(e) =>
                setNewAssignment({ ...newAssignment, deadline: e.target.value })
              }
            />
            <button
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              type="submit"
            >
              Add Assignment
            </button>
          </form>

          {/* Assignment List */}
          <ul className="bg-white shadow overflow-hidden rounded-lg divide-y divide-gray-200">
            {assignments.length > 0 ? (
              assignments.map((assignment) => (
                <li key={assignment.id} className="p-4">
                  <strong>{assignment?.title || "No Title"}: </strong>
                  {assignment?.description || "No Description"}, Grade:{" "}
                  {assignment?.grade || "N/A"}, Deadline:{" "}
                  {assignment?.deadline || "No Deadline"}
                </li>
              ))
            ) : (
              <li className="p-4">No assignments available.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
