import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000"; // Flask backend URL

// User Authentication
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    return { error: "Registration failed" };
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    return { error: "Invalid credentials" };
  }
};

// Fetch Job Listings
export const getJobListings = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/jobs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching job listings:", error);
    return [];
  }
};

// AI Chatbot API
export const chatWithAI = async (message) => {
  try {
    const response = await axios.post(`${BASE_URL}/chat`, { message });
    return response.data;
  } catch (error) {
    console.error("Error communicating with AI chatbot:", error);
    return { error: "Chatbot error" };
  }
};
