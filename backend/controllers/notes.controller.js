import noteModel from "../models/notes.model.js";

export const createNote = async (req, res) => {
  const { title, content } = req.body;

  // Validate input
  if (!title || !content) {
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }

  // Create new note
  const newNote = new noteModel({
    title,
    content,
    createdBy: req.userId,
    lastUpdated: new Date(),
  });

  try {
    const savedNote = await newNote.save();
    res.status(200).json({
      message: "Note created successfully",
      data: savedNote,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error creating note",
      error: err.message,
    });
  }
};
export const getNotes = async (req, res) => {
  try {
    const notes = await noteModel.find({ createdBy: req.userId });
    res.status(200).json({
      message: "Notes retrieved successfully",
      data: notes,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error retrieving notes",
      error: err.message,
    });
  }
};
export const updateNote = async (req, res) => {
  const { noteId, title, content } = req.body;

  // Validate input
  if (!noteId || !title || !content) {
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }

  try {
    const updatedNote = await noteModel.findByIdAndUpdate(
      noteId,
      { title, content, lastUpdated: new Date() },
      { new: true }
    );
    res.status(200).json({
      message: "Note updated successfully",
      data: updatedNote,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error updating note",
      error: err.message,
    });
  }
};
export const deleteNote = async (req, res) => {
  const { noteId } = req.body;

  // Validate input
  if (!noteId) {
    return res.status(400).json({
      message: "Please provide a note ID",
    });
  }

  try {
    await noteModel.findByIdAndDelete(noteId);
    res.status(200).json({
      message: "Note deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: "Error deleting note",
      error: err.message,
    });
  }
};
export const addCollaborator = async (req, res) => {
  const { noteId, userId, permission } = req.body;

  // Validate input
  if (!noteId || !userId || !permission) {
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }

  try {
    const updatedNote = await noteModel.findByIdAndUpdate(
      noteId,
      { $addToSet: { collaborators: { userId, permission } } },
      { new: true }
    );
    res.status(200).json({
      message: "Collaborator added successfully",
      data: updatedNote,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error adding collaborator",
      error: err.message,
    });
  }
};
export const removeCollaborator = async (req, res) => {
  const { noteId, userId } = req.body;

  // Validate input
  if (!noteId || !userId) {
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }

  try {
    const updatedNote = await noteModel.findByIdAndUpdate(
      noteId,
      { $pull: { collaborators: { userId } } },
      { new: true }
    );
    res.status(200).json({
      message: "Collaborator removed successfully",
      data: updatedNote,
    });
  } catch (err) {
    res.status(500).json({
      message: "Error removing collaborator",
      error: err.message,
    });
  }
};
