import React, { useState } from 'react'
import { Link } from 'react-router-dom';

//Signup Form
function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordStatus,setPasswordStatus] = useState(false)
  
    const handleSignup = (e) => {
      e.preventDefault();
      alert(`Account created for ${username}`);
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen font-sans">
        <form
          onSubmit={handleSignup}
          className="flex flex-col w-80 p-6 border border-gray-300 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4 text-center">Signup</h2>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label className="block mb-1 text-gray-700">Password:</label>
            <input
              type={passwordStatus ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
            <div className='absolute bottom-2 right-2'>
              <span className='cursor-pointer' onClick={() => setPasswordStatus(!passwordStatus)}>{passwordStatus ? "Hide" : "Show"}</span>
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Signup
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
  export default Signup;