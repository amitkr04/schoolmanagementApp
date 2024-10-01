import React from "react";
import Sidebar from "./Sidebar";

const SettingsProfile = () => {
  const teacherInfo = {
    name: "Amit",
    gender: "male",
    phone: "6231564859",
    dob: "25 April 2002",
    qualification: "Master of Education",
  };

  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        <Sidebar />
      </div>
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Profile Details</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <span className="font-semibold">Name:</span>
            <p className="text-gray-700">{teacherInfo.name}</p>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Gender:</span>
            <p className="text-gray-700">{teacherInfo.gender}</p>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Phone:</span>
            <p className="text-gray-700">{teacherInfo.phone}</p>
          </div>
          <div className="mb-4">
            <span className="font-semibold">DOB:</span>
            <p className="text-gray-700">{teacherInfo.dob}</p>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Qualification:</span>
            <p className="text-gray-700">{teacherInfo.qualification}</p>
          </div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfile;
