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
  BsCalendarEvent,
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
      <div className="flex items-center justify-center pt-4">
        <img src={logo} alt="Logo" className="w-12 h-auto" />
      </div>
      <div className="text-center text-lg font-bold mb-4">Teacher</div>

      <ul className="list-none p-0">
        <li className="flex items-center p-3 hover:bg-gray-700 transition-colors duration-300">
          <span className="mr-2">
            <BsGraphUp />
          </span>
          {isOpen && (
            <Link to="/teacher/dashboard" className="text-white">
              Dashboard
            </Link>
          )}
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 transition-colors duration-300">
          <span className="mr-2">
            <BsPeople />
          </span>
          {isOpen && (
            <Link to="/teacher/classes" className="text-white">
              Classes
            </Link>
          )}
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 transition-colors duration-300">
          <span className="mr-2">
            <BsPeople />
          </span>
          {isOpen && (
            <Link to="/teacher/students" className="text-white">
              Students
            </Link>
          )}
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 transition-colors duration-300">
          <span className="mr-2">
            <BsPerson />
          </span>
          {isOpen && (
            <Link to="/teacher/teachers" className="text-white">
              Teachers
            </Link>
          )}
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 transition-colors duration-300">
          <span className="mr-2">
            <BsFileText />
          </span>
          {isOpen && (
            <Link to="/teacher/assignments" className="text-white">
              Assignments
            </Link>
          )}
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 transition-colors duration-300">
          <span className="mr-2">
            <BsBook />
          </span>
          {isOpen && (
            <Link to="/teacher/exams" className="text-white">
              Exams
            </Link>
          )}
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 transition-colors duration-300">
          <span className="mr-2">
            <BsGraphDown />
          </span>
          {isOpen && (
            <Link to="/teacher/performance" className="text-white">
              Performance
            </Link>
          )}
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 transition-colors duration-300">
          <span className="mr-2">
            <BsCalendar />
          </span>
          {isOpen && (
            <Link to="/teacher/attendance" className="text-white">
              Attendance
            </Link>
          )}
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 transition-colors duration-300">
          <span className="mr-2">
            <BsChatDots />
          </span>
          {isOpen && (
            <Link to="/teacher/communication" className="text-white">
              Announcement
            </Link>
          )}
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 transition-colors duration-300">
          <span className="mr-2">
            <BsCalendarEvent />
          </span>
          {isOpen && (
            <Link to="/teacher/events" className="text-white">
              Events & Calendar
            </Link>
          )}
        </li>
        <li className="flex items-center p-3 hover:bg-gray-700 transition-colors duration-300">
          <span className="mr-2">
            <BsGear />
          </span>
          {isOpen && (
            <Link to="/teacher/settings" className="text-white">
              Settings & Profile
            </Link>
          )}
        </li>
      </ul>
      <div className="absolute top-4 right-0">
        <div
          onClick={toggleSidebar}
          className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300"
        >
          <span
            className={`text-white text-lg transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            ▲
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
