import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const Exam = () => {
  const [examData, setExamData] = useState([]);
  const [name, setName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [className, setClassName] = useState("");
  const [marks, setMarks] = useState("");

  useEffect(() => {
    fetchExams();
  }, []);

  const fetchExams = async () => {
    try {
      const response = await axios.get("/api/v1/exam/getall");
      if (Array.isArray(response.data)) {
        setExamData(response.data);
      } else {
        setExamData([response.data]);
      }
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
      const response = await axios.post("/api/v1/exam", newExam);
      if (typeof response.data === "object") {
        setExamData([...examData, response.data]);
        setName("");
        setRegistrationNumber("");
        setClassName("");
        setMarks("");
      } else {
        console.error("Error: API response data is not an object");
      }
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
      <div className="flex-1 pl-64 p-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Exam Details</h1>

          {/* Add Exam Form */}
          <form
            className="mb-6 flex flex-col space-y-4"
            onSubmit={handleAddExam}
          >
            <label className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label className="block text-sm font-medium text-gray-700">
              Registration Number:
            </label>
            <input
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              required
            />

            <label className="block text-sm font-medium text-gray-700">
              Class:
            </label>
            <input
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              required
            />

            <label className="block text-sm font-medium text-gray-700">
              Marks:
            </label>
            <input
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              required
            />

            <button
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
              type="submit"
            >
              Add Exam
            </button>
          </form>

          <h2 className="text-xl font-semibold">
            Total Marks: {calculateTotalMarks()}
          </h2>

          <h3 className="text-lg font-semibold mt-4">Exam Details:</h3>
          <ul className="bg-white shadow rounded-lg divide-y divide-gray-200 mt-4">
            {examData.map((exam, index) => (
              <li key={index} className="p-4">
                Name: {exam.name}, Registration Number:
                {exam.registrationNumber}, Class: {exam.className}, Marks:
                {exam.marks}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Exam;
