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
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white overflow-y-auto transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Sidebar header */}
      <div className="flex items-center justify-between h-16 bg-gray-900 px-3">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        {/* Toggle button */}
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

      <ul className="space-y-2">
        <li>
          <Link
            to="/admin/dashboard"
            className="flex items-center p-3 hover:bg-gray-700 rounded"
          >
            <BsGraphUp className="text-lg" />
            {isOpen && <span className="ml-2">Dashboard</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/admin/classes"
            className="flex items-center p-3 hover:bg-gray-700 rounded"
          >
            <BsPeople className="text-lg" />
            {isOpen && <span className="ml-2">Classes</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/admin/students"
            className="flex items-center p-3 hover:bg-gray-700 rounded"
          >
            <BsPerson className="text-lg" />
            {isOpen && <span className="ml-2">Students</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/admin/teachers"
            className="flex items-center p-3 hover:bg-gray-700 rounded"
          >
            <BsPerson className="text-lg" />
            {isOpen && <span className="ml-2">Teachers</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/admin/assignments"
            className="flex items-center p-3 hover:bg-gray-700 rounded"
          >
            <BsFileText className="text-lg" />
            {isOpen && <span className="ml-2">Assignments</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/admin/exams"
            className="flex items-center p-3 hover:bg-gray-700 rounded"
          >
            <BsBook className="text-lg" />
            {isOpen && <span className="ml-2">Exams</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/admin/performance"
            className="flex items-center p-3 hover:bg-gray-700 rounded"
          >
            <BsGraphDown className="text-lg" />
            {isOpen && <span className="ml-2">Performance</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/admin/attendance"
            className="flex items-center p-3 hover:bg-gray-700 rounded"
          >
            <BsCalendar className="text-lg" />
            {isOpen && <span className="ml-2">Attendance</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/admin/library"
            className="flex items-center p-3 hover:bg-gray-700 rounded"
          >
            <BsBook className="text-lg" />
            {isOpen && <span className="ml-2">Library</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/admin/communication"
            className="flex items-center p-3 hover:bg-gray-700 rounded"
          >
            <BsChatDots className="text-lg" />
            {isOpen && <span className="ml-2">Announcement</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/admin/events"
            className="flex items-center p-3 hover:bg-gray-700 rounded"
          >
            <BsCalendarEvent className="text-lg" />
            {isOpen && <span className="ml-2">Events & Calendar</span>}
          </Link>
        </li>
        <li>
          <Link
            to="/admin/settings"
            className="flex items-center p-3 hover:bg-gray-700 rounded"
          >
            <BsGear className="text-lg" />
            {isOpen && <span className="ml-2">Settings & Profile</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
