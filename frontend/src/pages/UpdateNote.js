import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateNote } from "../api";
import { toast } from "react-toastify";

const UpdateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const { selectedNoteData } = useSelector((state) => state.notes);
  const { noteId } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError("Both fields are required.");
      return;
    }

    const noteData = {
      title,
      content,
    };
    const response = updateNote(noteId, noteData);
    navigate("/dashboard/myNotes");
    toast.success("Note updated successfully");

    // Reset form
    setTitle("");
    setContent("");
    setError("");
  };

  useEffect(() => {
    if (selectedNoteData) {
      setTitle(selectedNoteData.title);
      setContent(selectedNoteData.content);
    }
  }, [noteId]);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Update Note</h1>
      <div className="max-w mx-auto mt-5 p-6 bg-white rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter note title"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-gray-700 font-medium mb-2"
            >
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              placeholder="Enter note content"
              rows={12}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Update Note
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateNote;
