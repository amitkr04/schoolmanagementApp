// CheckAnnouncementSection.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const CheckAnnouncementSection = () => {
  const [announcement, setAnnouncement] = useState("");
  const [announcements, setAnnouncements] = useState([]);
  const [error, setError] = useState(null);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/announcements/getall"
      );
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
      const response = await axios.post(
        "http://localhost:4000/api/v1/announcements",
        {
          announcement: announcement,
        }
      );
      console.log("Announcement sent:", response.data);
      setAnnouncement("");
      fetchAnnouncements();
    } catch (error) {
      console.error("Error sending announcement:", error);
      setError("Error sending announcement");
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-64 p-6 ml-4">
        {" "}
        {/* Adjusting margin-left for spacing */}
        <h1 className="text-2xl font-bold mb-4">Announcement</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label
              htmlFor="announcement"
              className="block text-sm font-medium mb-2"
            >
              Announcement:
            </label>
            <textarea
              id="announcement"
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              required
              rows={4}
              className="w-[50%] p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Send Announcement
          </button>
        </form>
        <h2 className="text-xl font-semibold mb-4">Announcements</h2>
        <ul className="space-y-4">
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
  );
};

export default CheckAnnouncementSection;
