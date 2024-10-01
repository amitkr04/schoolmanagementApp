import React from "react";
import { Link, useNavigate } from "react-router-dom";
import bg1 from "../assets/smslogo.jpg";
import bg from "../assets/bnsms.png";

const Home = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/choose-user");
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-900 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={bg1} alt="Logo" className="h-12 w-12" />
          <div className="ml-6 flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              About Us
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Products
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={handleLoginClick}
            className="bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-200"
          >
            Sign In
          </button>
          <button
            onClick={handleLoginClick}
            className="bg-gray-300 text-blue-900 px-4 py-2 rounded hover:bg-gray-400"
          >
            Guest Mode
          </button>
        </div>
      </nav>

      {/* Home Section */}
      <div className="flex flex-col md:flex-row justify-between items-center py-16 px-8 bg-gray-100">
        {/* Left Section */}
        <div className="flex-1 max-w-lg md:mr-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            School Management System
          </h1>
          <p className="text-gray-700 mb-6">
            The School Management System is a comprehensive web-based
            application built to streamline the management of school operations.
            It enables administrators, teachers, and students to interact
            seamlessly within a centralized platform. Students can create
            profiles, view assigned classes, and track their teachers, while
            teachers manage their own profiles and the students they teach. The
            system also includes powerful administrative tools for managing
            classes, tracking student fees, and monitoring teacher salaries.
            With built-in analytics and reporting features, administrators can
            gain insights into classroom performance, financials, and student
            data. The intuitive design ensures an exceptional user experience,
            making school management more efficient and organized.
          </p>
          <Link
            to="/admin/register"
            className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800"
          >
            Admin Register
          </Link>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 mt-8 md:mt-0">
          <img src={bg} alt="pupils" className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-4 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left Side */}
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold">School Management System</h4>
            <p className="text-sm">Streamlining school operations with ease.</p>
          </div>

          {/* Center Links */}
          <div className="flex pr-8 space-x-4">
            <Link to="#" className="hover:text-gray-300 text-sm">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-gray-300 text-sm">
              Terms of Service
            </Link>
            <Link to="#" className="hover:text-gray-300 text-sm">
              Help Center
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
