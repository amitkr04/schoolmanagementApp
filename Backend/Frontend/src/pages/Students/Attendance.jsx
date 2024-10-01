// AttendanceSection.js
import React from "react";
import Sidebar from "./Sidebar";

const AttendanceSection = () => {
  // Sample attendance data
  const attendance = [
    { id: 1, date: "2024-05-01", present: true },
    { id: 2, date: "2024-05-02", present: false },
    { id: 3, date: "2024-05-03", present: true },
    { id: 4, date: "2024-05-04", present: true },
    { id: 5, date: "2024-05-05", present: true },
  ];

  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Attendance</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <ul className="divide-y divide-gray-200">
            {attendance.map(({ id, date, present }) => (
              <li key={id} className="flex justify-between items-center py-2">
                <span className="text-lg">{date}</span>
                <span
                  className={`font-semibold ${
                    present ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {present ? "Present" : "Absent"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AttendanceSection;
