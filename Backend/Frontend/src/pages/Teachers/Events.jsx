// EventSection.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";

const EventSection = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");
  const [error, setError] = useState(null);

  // Function to fetch events from the backend
  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/events/getall"
      );
      setEvents(response.data.events || []);
    } catch (error) {
      console.error("Error fetching events:", error);
      setError("Error fetching events");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Function to add a new event
  const addEvent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/events", {
        event: newEvent,
      });
      setEvents([...events, response.data.event]);
      setNewEvent("");
    } catch (error) {
      console.error("Error adding event:", error);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError("Error adding event");
      }
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-64 p-6 ml-4">
        {" "}
        {/* Adjusting margin-left for spacing */}
        <h1 className="text-2xl font-bold mb-4">Events & Calendar</h1>
        <div className="mb-4">Current Time: {new Date().toLocaleString()}</div>
        <div className="bg-white shadow-md rounded p-6 mb-4">
          <h2 className="text-xl font-semibold mb-2">Calendar</h2>
          <div className="bg-gray-100 p-4 rounded h-64 flex items-center justify-center">
            {/* Display Calendar Here */}
            <p className="text-gray-500">Calendar</p>
          </div>
        </div>
        <form onSubmit={addEvent} className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Add New Event</h2>
          <input
            type="text"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            placeholder="Enter Event"
            className="border rounded p-2 w-full mb-2"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
          >
            Add Event
          </button>
        </form>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div>
          <h2 className="text-xl font-semibold mb-2">Events</h2>
          <div className="bg-white shadow-md rounded p-4">
            {events.map((event, index) => (
              <div key={index} className="border-b last:border-b-0 py-2">
                {event}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
