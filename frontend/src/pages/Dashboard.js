import React from "react";
import { Outlet } from "react-router-dom";
import HeaderSection from "../components/HeaderSection";

const Dashboard = () => {
  return (
    <>
      <HeaderSection />
      <div className="flex h-[91vh] bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r shadow-md hidden md:block">
          <div className="p-6 font-bold text-xl text-blue-600"></div>
          <nav className="px-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="/dashboard/"
                  className="block py-2 px-3 rounded hover:bg-blue-50 text-gray-700"
                >
                  📄 Dashboard
                </a>
              </li>
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

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
