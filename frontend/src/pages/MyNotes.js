import React, { use } from "react";
import { useState, useEffect } from "react";
import { deleteNote, fetchNotes } from "../api";
import { toast, ToastContainer } from "react-toastify";
import LoadingIndicator from "../components/LoadingIndicator";

function MyNotes() {
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const response = await fetchNotes();
    console.log(response);
    setNotes(response.data);
    setLoading(false);
  };
  useEffect(() => {
    getNotes();
  }, [loading]);

  const handleDeleteAction = async (id) => {
    setLoading(true);
    const response = await deleteNote(id);
    console.log(response);
    setLoading(false);
    toast.success("Notes Deleted");
  };

  return (
    <>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Notes</h1>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => (window.location.href = "/dashboard/createNote")}
          >
            + Create Note
          </button>
        </div>

        {loading ? (
          <LoadingIndicator size="lg" />
        ) : notes.length === 0 ? (
          <p className="text-gray-500">No notes created yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note) => (
              <div
                key={note._id}
                className="bg-white p-4 rounded shadow hover:shadow-lg transition"
              >
                <div className="flex justify-between items-start">
                  <h2 className="text-lg font-semibold">{note.title}</h2>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      note.permission === "read"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {note.permission || "Owner"}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {note.content}
                </p>
                <div className="mt-4 flex gap-2">
                  <button className="text-sm px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">
                    Edit
                  </button>
                  <button
                    className="text-sm px-3 py-1 rounded bg-red-100 text-red-600 hover:bg-red-200"
                    onClick={() => handleDeleteAction(note._id)}
                  >
                    Delete
                  </button>
                </div>
                {/* Optional: Last updated and collaborators info */}
                <div className="text-xs text-gray-400 mt-2">
                  Last updated: {new Date(note.lastUpdated).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default MyNotes;
