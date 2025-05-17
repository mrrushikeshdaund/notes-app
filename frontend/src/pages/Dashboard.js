import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-md hidden md:block">
        <div className="p-6 font-bold text-xl text-blue-600">NoteApp</div>
        <nav className="px-4">
          <ul className="space-y-2">
            <li>
              <a
                href="/dashboard/myNotes"
                className="block py-2 px-3 rounded hover:bg-blue-50 text-gray-700"
              >
                📝 My Notes
              </a>
            </li>
            <li>
              <a
                href="/dashboard/shared"
                className="block py-2 px-3 rounded hover:bg-blue-50 text-gray-700"
              >
                👥 Shared with Me
              </a>
            </li>
            <li>
              <a
                href="/dashboard/createNote"
                className="block py-2 px-3 rounded hover:bg-blue-50 text-gray-700"
              >
                ➕ Create New Note
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="h-16 bg-white shadow-md flex items-center justify-between px-6">
          <div className="font-semibold text-gray-700 text-lg">Dashboard</div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Hi, User</span>
            <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 text-sm">
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
