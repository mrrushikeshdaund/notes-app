import axios from "axios";

const API_URL = "http://localhost:5000";

export const createUserSignup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/signup`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || "Error signing up");
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || "Error logging in");
  }
};

export const fetchNotes = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }
    const response = await axios.get(`${API_URL}/notes/getNotes`, {
      headers: {
        authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || "Error fetching notes");
  }
};

export const createNote = async (noteData) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }
    const response = await axios.post(`${API_URL}/notes/createNote`, noteData, {
      headers: {
        authorization: token,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || "Error creating note");
  }
};
