import React from "react";
import Sidebar from "./Sidebar";

const ProfileSection = () => {
  // Sample student profile data
  const studentProfile = {
    name: "yuvraj singh",
    gender: "male",
    dob: "12/12/2000",
    class: "12th",
    contact: "6206116456",
    fee: "paid",
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-64 p-6">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="mb-4">
            <div className="flex justify-between">
              <span className="font-semibold">Name:</span>
              <span>{studentProfile.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Gender:</span>
              <span>{studentProfile.gender}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">DOB:</span>
              <span>{studentProfile.dob}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Class:</span>
              <span>{studentProfile.class}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Contact:</span>
              <span>{studentProfile.contact}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Fee:</span>
              <span>{studentProfile.fee}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
