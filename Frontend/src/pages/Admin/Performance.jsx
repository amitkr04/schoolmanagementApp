import React from "react";
import Sidebar from "./Sidebar";

const Performance = () => {
  // Sample data for school performance
  const schoolPerformanceData = {
    averageScore: 85,
    totalStudents: 100,
  };

  // Sample data for individual student performance
  const individualPerformanceData = [
    { id: 1, name: "amit", score: 90 },
    { id: 2, name: "yuvraj", score: 85 },
    { id: 3, name: "sonali", score: 92 },
  ];

  return (
    <div className="flex">
      <Sidebar /> {/* Include the Sidebar component */}
      <div className="flex-1 pl-64 p-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          {/* School Performance Section */}
          <h1 className="text-3xl font-bold mb-6">School Performance</h1>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <p className="text-lg font-semibold">
              Average Score: {schoolPerformanceData.averageScore}
            </p>
            <p className="text-lg font-semibold">
              Total Students: {schoolPerformanceData.totalStudents}
            </p>
          </div>

          {/* Individual Performance Section */}
          <h2 className="text-2xl font-semibold mb-4">
            Individual Performance
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {individualPerformanceData.map((student) => (
              <p key={student.id} className="text-md mb-2">
                {student.name}:{" "}
                <span className="font-semibold">{student.score}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
