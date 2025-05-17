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
