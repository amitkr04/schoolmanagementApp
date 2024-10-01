import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

const Classes = () => {
  const [newClassName, setNewClassName] = useState("");
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get("/api/v1/class/getall");
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

  const handleAddClass = async (e) => {
    e.preventDefault();
    if (newClassName.trim() !== "") {
      try {
        const response = await axios.post("/api/v1/class", {
          grade: newClassName,
        });
        console.log("Response data:", response.data);
        setClasses((prevClasses) => [...prevClasses, response.data]);
        setNewClassName("");
      } catch (error) {
        console.error("Error adding class:", error);
      }
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-64 p-6 bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-6">Classes</h1>

          {/* Add Class Form */}
          <form onSubmit={handleAddClass} className="mb-6 flex items-center">
            <input
              type="text"
              placeholder="Enter class name"
              value={newClassName}
              onChange={(e) => setNewClassName(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg w-full mr-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Add Class
            </button>
          </form>

          {/* Class List */}
          <ul className="divide-y divide-gray-200">
            {Array.isArray(classes) &&
              classes.map((classItem, index) => (
                <li
                  key={index}
                  className="p-4 bg-gray-50 hover:bg-gray-100 rounded-lg mb-2"
                >
                  {classItem.grade}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Classes;
