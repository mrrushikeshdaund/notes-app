import React, { useState, useEffect } from "react";
import axios from "axios";

const Shared = () => {
  const [noteId, setNoteId] = useState("");
  const [userId, setUserId] = useState("");
  const [permission, setPermission] = useState("read");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [userOptions, setUserOptions] = useState([]);
  const [noteOptions, setNoteOptions] = useState([]);

  const handleAddCollaborator = async () => {
    try {
      const res = await axios.post("/api/notes/add-collaborator", {
        noteId,
        userId,
        permission,
      });
      setMessage(res.data.message);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Error adding collaborator");
      setMessage("");
    }
  };

  const handleRemoveCollaborator = async () => {
    try {
      const res = await axios.post("/api/notes/remove-collaborator", {
        noteId,
        userId,
      });
      setMessage(res.data.message);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Error removing collaborator");
      setMessage("");
    }
  };

  useEffect(() => {
    // Fetch users and notes on mount
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      try {
        const [usersRes, notesRes] = await Promise.all([
          axios.get("/api/users"), // adjust to your actual endpoint
          axios.get("/api/notes/getNotes", {
            headers: {
              authorization: token,
            },
          }), // adjust as needed
        ]);
        setUserOptions(usersRes.data || []);
        setNoteOptions(notesRes.data || []);
      } catch (err) {
        console.error("Error fetching user/note options", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Manage Collaborators</h1>
      <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-5">
        <div className="space-y-4">
          {/* Note ID Autocomplete */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Note ID
            </label>
            <input
              type="text"
              list="note-options"
              value={noteId}
              onChange={(e) => setNoteId(e.target.value)}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Select or enter Note ID"
            />
            <datalist id="note-options">
              {noteOptions.map((note) => (
                <option key={note._id} value={note._id}>
                  {note.title}
                </option>
              ))}
            </datalist>
          </div>

          {/* User ID Autocomplete */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              User ID
            </label>
            <input
              type="text"
              list="user-options"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Select or enter User ID"
            />
            <datalist id="user-options">
              {userOptions.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.name || user.email || user._id}
                </option>
              ))}
            </datalist>
          </div>

          {/* Permission Select */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Permission
            </label>
            <select
              value={permission}
              onChange={(e) => setPermission(e.target.value)}
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="read">Read</option>
              <option value="edit">Edit</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-4">
            <button
              onClick={handleAddCollaborator}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md w-full"
            >
              Add Collaborator
            </button>
            <button
              onClick={handleRemoveCollaborator}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md w-full"
            >
              Remove Collaborator
            </button>
          </div>

          {/* Messages */}
          {message && <p className="text-green-600 mt-4">{message}</p>}
          {error && <p className="text-red-600 mt-4">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Shared;
