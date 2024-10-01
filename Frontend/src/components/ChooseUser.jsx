import React from "react";
import { Link } from "react-router-dom";

const ChooseUser = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Admin Section */}
      <div className="bg-white shadow-md rounded-lg p-8 mb-8 w-80 text-center">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">Admin</h2>
        <Link
          to="/admin-signIn"
          className="bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-800"
        >
          Login as Admin
        </Link>
      </div>

      {/* Student Section */}
      <div className="bg-white shadow-md rounded-lg p-8 mb-8 w-80 text-center">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">Student</h2>
        <Link
          to="/student-signIn"
          className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-500"
        >
          Login as Student
        </Link>
      </div>

      {/* Teacher Section */}
      <div className="bg-white shadow-md rounded-lg p-8 w-80 text-center">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">Teacher</h2>
        <Link
          to="/teacher-signIn"
          className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-500"
        >
          Login as Teacher
        </Link>
      </div>
    </div>
  );
};

export default ChooseUser;
