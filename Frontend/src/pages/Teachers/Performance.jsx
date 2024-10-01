// CheckPerformanceSection.js
import React from "react";
import Sidebar from "./Sidebar";

const CheckPerformanceSection = () => {
  // Sample data for school performance
  const schoolPerformanceData = {
    averageScore: 85,
    totalStudents: 100,
  };

  // Sample data for individual student performance
  const individualPerformanceData = [
    { id: 1, name: "Amit", score: 90 },
    { id: 2, name: "Yuvraj", score: 85 },
    { id: 3, name: "Abdullah", score: 92 },
  ];

  return (
    <div className="flex w-[50%]">
      <Sidebar />
      <div className="flex-1  pl-64 p-6 ml-4">
        {" "}
        {/* Adjusting margin-left for spacing */}
        <h1 className="text-2xl font-bold mb-6">School Performance</h1>
        <div className="bg-white shadow-md rounded p-4 mb-6">
          <p className="text-lg font-semibold">
            Average Score: {schoolPerformanceData.averageScore}
          </p>
          <p className="text-lg font-semibold">
            Total Students: {schoolPerformanceData.totalStudents}
          </p>
        </div>
        <h2 className="text-2xl font-bold mb-4">Individual Performance</h2>
        <div className="bg-white shadow-md rounded p-4">
          {individualPerformanceData.map((student) => (
            <p key={student.id} className="text-lg mb-2">
              {student.name}: <strong>{student.score}</strong>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckPerformanceSection;
