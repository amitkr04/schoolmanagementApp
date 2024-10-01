import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState("");
  const [error, setError] = useState(null);
  const [date, setDate] = useState(new Date());

  // Function to fetch events from the backend
  const fetchEvents = async () => {
    try {
      const response = await axios.get("/api/v1/events/getall");
      setEvents(response.data.event || []);
    } catch (error) {
      console.error("Error fetching events:", error);
      setError("Error fetching events");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const addEvent = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post("/api/v1/events", {
        events: newEvent,
        date: date,
      });
      setEvents([...events, { events: newEvent, date: date }]);
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
      <div className="flex-1 pl-64 p-6">
        <h1 className="text-2xl font-bold mb-4">Events & Calendar</h1>

        {/* Current time */}
        <div className="text-gray-600 mb-4">
          Current Time: {new Date().toLocaleString()}
        </div>

        {/* Calendar component */}
        <div className="bg-gray-100 p-4 rounded-lg shadow mb-6">
          <Calendar onChange={setDate} value={date} className="w-full" />
        </div>

        {/* Add Event Form */}
        <form onSubmit={addEvent} className="mb-6 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
          <input
            type="text"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            placeholder="Enter Event"
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Event
          </button>
        </form>

        {/* Error Display */}
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
            role="alert"
          >
            {error}
          </div>
        )}

        {/* Display Events */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Events</h2>
          <ul className="space-y-4">
            {events.map((event, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                {/* Display event and date */}
                <p>Event: {event.events}</p>
                <p>Date: {new Date(event.date).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
