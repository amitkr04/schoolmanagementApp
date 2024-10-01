import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const StudentAssignments = () => {
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

  const handleDoAssignment = async (id) => {
    // Implement your logic for handling assignment submission
    try {
      await axios.post(
        `http://localhost:4000/api/v1/assignments/${id}/submit`,
        {
          opinion: "Your opinion here",
        }
      );
      fetchAssignments();
    } catch (error) {
      console.error("Error submitting assignment:", error);
    }
  };

  return (
    <div className="flex">
      <div className="w-64">
        <Sidebar />
      </div>
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Assignments</h1>
        {assignments.map((assignment) => (
          <div
            key={assignment.id}
            className="bg-gray-100 rounded-lg p-4 mb-4 shadow-md"
          >
            <h2 className="text-xl font-semibold">{assignment.title}</h2>
            <p className="text-gray-700 mb-4">{assignment.description}</p>
            {!assignment.done ? (
              <AssignmentForm
                onDoAssignment={() => handleDoAssignment(assignment.id)}
              />
            ) : (
              <p className="text-green-600">Assignment Done</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const AssignmentForm = ({ onDoAssignment }) => {
  const [opinion, setOpinion] = useState("");

  const handleInputChange = (event) => {
    setOpinion(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (opinion.trim() !== "") {
      onDoAssignment();
      setOpinion(""); // Clear input after submission
    } else {
      alert("Please provide your opinion/assignment.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <textarea
        value={opinion}
        onChange={handleInputChange}
        placeholder="Enter your opinion/assignment..."
        className="border rounded-lg p-2 mb-2"
        rows="4"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default StudentAssignments;
