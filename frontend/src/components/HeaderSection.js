import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderSection = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <header className="bg-blue-600 text-white p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Note App</h1>

      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C8.67 6.165 8 7.388 8 8.75v5.408c0 .384-.148.745-.41 1.01L6 17h5"
            />
          </svg>
          <span className="absolute -top-1 -right-1 inline-flex h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* User Name */}
        <span className="font-medium">John Doe</span>

        {/* Logout Button */}
        <button
          className="bg-white text-blue-600 font-semibold px-3 py-1 rounded hover:bg-blue-100"
          onClick={handleSignOut}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default HeaderSection;
