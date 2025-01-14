import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [passwordStatus,setPasswordStatus] = useState(false)
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      if (username && password) {
        setIsLoggedIn(true);
        console.log("Remember Me:", rememberMe);
      } else {
        alert("Invalid credentials. Please try again.");
      }
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen font-sans">
        {isLoggedIn ? (
          <h2 className="text-green-600 text-2xl">Login Successfully</h2>
        ) : (
          <form
            onSubmit={handleLogin}
            className="flex flex-col w-80 p-6 border border-gray-300 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) =>setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-200"
                required
              />
            </div>
            <div className="mb-4 relative">
              <label className="block mb-1 text-gray-700">Password:</label>
              <input
                type={passwordStatus ? 'text' : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-200"
                required
              />
              <div className="absolute right-2 bottom-2">
                <span className="cursor-pointer" onClick={() => setPasswordStatus(!passwordStatus)}>{passwordStatus ? 'Hide' : "Show"}</span>
              </div>
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2"
              />
              <label className="text-gray-700">Remember Me</label>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Login
            </button>
            <div className="mt-4 flex justify-between items-center">
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="text-blue-500 hover:underline"
              >
                Signup
              </button>
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-blue-500 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          </form>
        )}
      </div>
    );
  }
  export default Login;