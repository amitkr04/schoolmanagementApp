import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import EventCalendar from "./EventCalender";
import Announcement from "./Announcement";
import Performance from "./Performance";
import axios from "axios";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [studentPerformance, setStudentPerformance] = useState([]);

  useEffect(() => {
    fetchEvents();
    fetchAnnouncements();
    fetchStudentPerformance();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/v1/events/getall");
      setEvents(response.data.events || []);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get("/api/v1/announcements/getall");
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  const fetchStudentPerformance = async () => {
    try {
      const response = await axios.get("/api/v1/performance/getall");
      setStudentPerformance(response.data.performance || []);
    } catch (error) {
      console.error("Error fetching student performance:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div
        className={`flex-1 p-6 transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Dashboard Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Admin Dashboard
          </h2>
          <p className="text-gray-600">
            Overview of system status and key metrics
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-700">
                Total Students
              </h3>
              <p className="text-gray-500 text-3xl mt-2">500</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-700">
                Total Teachers
              </h3>
              <p className="text-gray-500 text-3xl mt-2">50</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-700">
                Total Classes
              </h3>
              <p className="text-gray-500 text-3xl mt-2">50</p>
            </div>
          </div>
        </div>

        {/* Event Calendar Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Upcoming Events
          </h3>
          <div className="bg-white  p-6 rounded-lg shadow-md">
            <EventCalendar events={events} />
          </div>
        </div>

        {/* Bottom Section: Performance and Announcements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Performance */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Student Performance
            </h3>
            <Performance studentPerformance={studentPerformance} />
          </div>

          {/* Announcements */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Announcements
            </h3>
            <Announcement announcements={announcements} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
