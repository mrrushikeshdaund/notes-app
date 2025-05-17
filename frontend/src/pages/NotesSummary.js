import React from "react";

const NotesSummary = () => {
  return (
    <>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Welcome back! 👋
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
          <h3 className="font-semibold text-gray-700">📄 Total Notes</h3>
          <p className="text-2xl mt-2 font-bold text-blue-600">24</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
          <h3 className="font-semibold text-gray-700">📤 Shared Notes</h3>
          <p className="text-2xl mt-2 font-bold text-green-600">8</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow hover:shadow-md transition">
          <h3 className="font-semibold text-gray-700">✍️ Last Edited</h3>
          <p className="text-md mt-2 text-gray-500">May 16, 2025</p>
        </div>
      </div>
    </>
  );
};

export default NotesSummary;
