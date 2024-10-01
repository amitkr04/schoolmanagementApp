import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/smslogo.jpg";
import {
  BsGraphUp,
  BsPeople,
  BsPerson,
  BsFileText,
  BsBook,
  BsGraphDown,
  BsCalendar,
  BsGear,
  BsChatDots,
} from "react-icons/bs";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white overflow-y-auto transition-width duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center justify-center py-4">
        <img src={logo} alt="Logo" className="w-12 h-auto" />
      </div>
      <h2 className="text-center text-xl font-bold mb-4">Student</h2>
      <ul className="list-none p-0">
        <li className="flex items-center p-3 hover:bg-gray-700 transition-colors">
          <BsGraphUp className="mr-2" />
          <Link
            to="/student/dashboard"
            className={`text-base ${isOpen ? "ml-2" : "hidden"}`}
          >
            Dashboard
          </Link>
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 transition-colors">
          <BsFileText className="mr-2" />
          <Link
            to="/student/assignments"
            className={`text-base ${isOpen ? "ml-2" : "hidden"}`}
          >
            Assignments
          </Link>
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 transition-colors">
          <BsBook className="mr-2" />
          <Link
            to="/student/exams"
            className={`text-base ${isOpen ? "ml-2" : "hidden"}`}
          >
            Exams
          </Link>
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 transition-colors">
          <BsGraphDown className="mr-2" />
          <Link
            to="/student/performance"
            className={`text-base ${isOpen ? "ml-2" : "hidden"}`}
          >
            Performance
          </Link>
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 transition-colors">
          <BsCalendar className="mr-2" />
          <Link
            to="/student/attendance"
            className={`text-base ${isOpen ? "ml-2" : "hidden"}`}
          >
            Attendance
          </Link>
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 transition-colors">
          <BsBook className="mr-2" />
          <Link
            to="/student/library"
            className={`text-base ${isOpen ? "ml-2" : "hidden"}`}
          >
            Library
          </Link>
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 transition-colors">
          <BsChatDots className="mr-2" />
          <Link
            to="/student/communication"
            className={`text-base ${isOpen ? "ml-2" : "hidden"}`}
          >
            Announcement
          </Link>
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 transition-colors">
          <BsGear className="mr-2" />
          <Link
            to="/student/settings"
            className={`text-base ${isOpen ? "ml-2" : "hidden"}`}
          >
            Profile
          </Link>
        </li>
      </ul>
      <div
        className="absolute top-5 right-0 w-8 h-8 bg-gray-700 rounded-full cursor-pointer flex items-center justify-center"
        onClick={toggleSidebar}
      >
        <span
          className={`text-white text-lg transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▲
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
