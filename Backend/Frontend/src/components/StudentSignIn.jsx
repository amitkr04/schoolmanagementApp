import React, { useState } from "react";
import { Link } from "react-router-dom";

const StudentSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Student Sign In:", { email, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
          Student Sign In
        </h2>

        <form className="flex flex-col space-y-4">
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Submit Button */}
          <Link
            to="/student/dashboard"
            onClick={handleSignIn}
            className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-800 transition-colors"
          >
            Sign In
          </Link>
        </form>
      </div>
    </div>
  );
};

export default StudentSignIn;
