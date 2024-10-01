// TeacherDashboard.js
import React from "react";
import Sidebar from "./Sidebar";

const TeacherDashboard = () => {
  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="flex-1 p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-semibold">Total Students</h3>
              <p className="text-2xl">500</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-semibold">Total Teachers</h3>
              <p className="text-2xl">50</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-semibold">Total Classes</h3>
              <p className="text-2xl">50</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          {/* Add a list of recent activity items */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p>No recent activities to show.</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
          {/* Add a calendar or list of upcoming events */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p>No upcoming events to show.</p>
          </div>
        </div>

        {/* Add more sections for other parts of the admin dashboard */}
      </div>
    </div>
  );
};

export default TeacherDashboard;
