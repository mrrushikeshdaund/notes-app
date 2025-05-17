import express from "express";
import mongoose from "mongoose";

const collaboratorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  permission: {
    type: String,
    enum: ["read", "write"],
    required: true,
  },
});

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
  collaborators: [collaboratorSchema],
});

const noteModel = mongoose.model("Note", noteSchema);

export default noteModel;
