// TeacherProfileSection.js
import React, { useState } from "react";
import Sidebar from "./Sidebar";

const TeacherProfileSection = () => {
  const [teacherInfo, setTeacherInfo] = useState({
    name: "yuvraj",
    email: "yuvraj@example.com",
    phone: "9663254896",
    address: "kolkata",
    qualification: "B.Tech",
  });

  return (
    <div className="flex w-[50%]">
      <Sidebar />
      <div className="flex-1 pl-64 p-6 ml-4">
        {" "}
        {/* Adjusting margin-left for spacing */}
        <h1 className="text-2xl font-bold mb-6">Profile Details</h1>
        <div className="bg-white shadow-md rounded p-6">
          <div className="mb-4">
            <span className="font-semibold">Name:</span>
            <p>{teacherInfo.name}</p>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Email:</span>
            <p>{teacherInfo.email}</p>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Phone:</span>
            <p>{teacherInfo.phone}</p>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Address:</span>
            <p>{teacherInfo.address}</p>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Qualification:</span>
            <p>{teacherInfo.qualification}</p>
          </div>
          <button className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfileSection;
