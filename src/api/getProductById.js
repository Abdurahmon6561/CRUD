// /src/api/getProductById.js

import axios from "axios";
import { backendUrl } from "./backendUrl"; // Ensure the backendUrl is correctly set

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${backendUrl}/products/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching product by ID", error);
    throw error;
  }
};
