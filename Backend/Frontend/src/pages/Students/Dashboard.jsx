import React from "react";
import Sidebar from "./Sidebar";

const StudentDashboard = () => {
  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        <Sidebar />
      </div>
      <div className="flex-1 p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg">Assignments</h3>
              <p className="text-2xl">5</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg">Performance</h3>
              <p className="text-2xl">500</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg">Term</h3>
              <p className="text-2xl">1</p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          {/* Add a list of recent activity items */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p>No recent activity to display.</p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
          {/* Add a calendar or list of upcoming events */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p>No upcoming events to display.</p>
          </div>
        </section>

        {/* Add more sections for other parts of the student dashboard */}
      </div>
    </div>
  );
};

export default StudentDashboard;
