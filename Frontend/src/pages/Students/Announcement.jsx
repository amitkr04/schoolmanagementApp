// AnnouncementSection.js
import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const AnnouncementSection = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get("/api/v1/announcements/getall");
      setAnnouncements(response.data.announcements);
    } catch (error) {
      console.error("Error fetching announcements:", error);
    }
  };

  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Announcements</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <ul className="divide-y divide-gray-200">
            {announcements.map((announcement) => (
              <li key={announcement._id} className="py-4">
                <h2 className="text-lg font-semibold">
                  {announcement.announcement}
                </h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementSection;
