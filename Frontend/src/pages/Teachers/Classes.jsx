// ClassSection.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const ClassSection = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/class/getall"
      );
      if (response.data && Array.isArray(response.data.classes)) {
        setClasses(response.data.classes);
      } else {
        console.error(
          "Error fetching classes: Invalid data format",
          response.data
        );
      }
    } catch (error) {
      console.error("Error fetching classes:", error.message);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-64 p-6 ml-4">
        {" "}
        {/* Adjusting margin-left for spacing */}
        <h1 className="text-2xl font-bold mb-4">Classes</h1>
        <ul className="space-y-4">
          {classes.map((classItem, index) => (
            <li
              key={index}
              className="p-4 border border-gray-200 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-semibold">{classItem.grade}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClassSection;
