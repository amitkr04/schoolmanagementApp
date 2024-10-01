// CheckExamSection.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const CheckExamSection = () => {
  const [examData, setExamData] = useState([]);
  const [name, setName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [className, setClassName] = useState("");
  const [marks, setMarks] = useState("");

  useEffect(() => {
    fetchExams(); // Fetch exams on component mount
  }, []);

  const fetchExams = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/exam");
      setExamData(response.data);
    } catch (error) {
      console.error("Error fetching exams:", error);
    }
  };

  const handleAddExam = async (e) => {
    e.preventDefault();
    const newExam = {
      name,
      registrationNumber,
      className,
      marks: parseInt(marks),
    };
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/exam",
        newExam
      );
      setExamData([...examData, response.data]);
      setName("");
      setRegistrationNumber("");
      setClassName("");
      setMarks("");
    } catch (error) {
      console.error("Error adding exam:", error);
    }
  };

  const calculateTotalMarks = () => {
    return examData.reduce((total, exam) => total + exam.marks, 0);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-64 p-6 ml-4">
        {" "}
        {/* Adjusting margin-left for spacing */}
        <h1 className="text-2xl font-bold mb-4">Exam Details</h1>
        <form onSubmit={handleAddExam} className="mb-6">
          <label className="block text-sm font-medium mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="block w-[50%] p-2 border border-gray-300 rounded mb-4"
          />
          <label className="block text-sm font-medium mb-2">
            Registration Number:
          </label>
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            required
            className="block  w-[50%] p-2 border border-gray-300 rounded mb-4"
          />
          <label className="block text-sm font-medium mb-2">Class:</label>
          <input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
            className="block  w-[50%] p-2 border border-gray-300 rounded mb-4"
          />
          <label className="block text-sm font-medium mb-2">Marks:</label>
          <input
            type="number"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            required
            className="block  w-[50%] p-2 border border-gray-300 rounded mb-4"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Add Exam
          </button>
        </form>
        <h2 className="text-lg font-semibold mb-2">
          Total Marks: {calculateTotalMarks()}
        </h2>
        <h3 className="text-lg font-semibold mb-2">Exam Details:</h3>
        <ul className="space-y-2">
          {examData.map((exam, index) => (
            <li
              key={index}
              className="p-4 border border-gray-200 rounded shadow-md"
            >
              Name: {exam.name}, Registration Number: {exam.registrationNumber},
              Class: {exam.className}, Marks: {exam.marks}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckExamSection;
