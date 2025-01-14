import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail] = useState("");
  
    const handleForgotPassword = (e) => {
      e.preventDefault();
      alert(`Password reset link sent to ${email}`);
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen font-sans">
        <form
          onSubmit={handleForgotPassword}
          className="flex flex-col w-80 p-6 border border-gray-300 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4 text-center">Forgot Password</h2>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Reset Password
          </button>
          <Link
            to="/"
            className="mt-4 text-blue-500 hover:underline text-center"
          >
            Back to Login
          </Link>
        </form>
      </div>
    );
  }
  export default ForgotPassword;