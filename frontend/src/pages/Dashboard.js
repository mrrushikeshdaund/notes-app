import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderSection from "../components/HeaderSection";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <>
      <HeaderSection userName={currentUser.name} />
      <div className="flex h-[91vh] bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r shadow-md hidden md:block">
          <div className="p-6 font-bold text-xl text-blue-600"></div>
          <nav className="px-4">
            <ul className="space-y-2">
              <li>
                <span
                  onClick={() => navigate("/dashboard/")}
                  className="block py-2 px-3 cursor-pointer rounded hover:bg-blue-50 text-gray-700"
                >
                  📄 Dashboard
                </span>
              </li>
              <li>
                <span
                  onClick={() => navigate("/dashboard/myNotes")}
                  className="block py-2 px-3 rounded cursor-pointer hover:bg-blue-50 text-gray-700"
                >
                  📝 My Notes
                </span>
              </li>
              <li>
                <span
                  onClick={() => navigate("/dashboard/createNote")}
                  className="block py-2 px-3 rounded cursor-pointer hover:bg-blue-50 text-gray-700"
                >
                  ➕ Create New Note
                </span>
              </li>
              <li>
                <span
                  onClick={() => navigate("/dashboard/shared")}
                  className="block py-2 px-3 rounded cursor-pointer hover:bg-blue-50 text-gray-700"
                >
                  👥 Manage Collaborators
                </span>
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
