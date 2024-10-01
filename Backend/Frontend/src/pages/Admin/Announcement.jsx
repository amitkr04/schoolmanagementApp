import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const Announcement = () => {
  // State for managing announcement
  const [announcement, setAnnouncement] = useState("");
  const [announcements, setAnnouncements] = useState([]);

  // Function to fetch announcements
  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get("/api/v1/announcements/getall");
      setAnnouncements(response.data.announcements);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/announcements", {
        announcement: announcement,
      });
      console.log("Announcement sent:", response.data);
      setAnnouncement("");
      // Fetch announcements again to update the list
      fetchAnnouncements();
    } catch (error) {
      console.error("Error sending announcement:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 ml-64 transition-all duration-300">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Announcement</h1>
        {/* Announcement Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md mb-6"
        >
          <div className="mb-4">
            <label
              htmlFor="announcement"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Announcement:
            </label>
            <textarea
              id="announcement"
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              required
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Send Announcement
          </button>
        </form>

        {/* Display Announcements */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Announcements
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ul className="space-y-2">
            {announcements.map((announcement) => (
              <li
                key={announcement._id}
                className="p-4 border border-gray-200 rounded-lg"
              >
                <p className="text-gray-700">{announcement.announcement}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
