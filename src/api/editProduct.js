// /src/api/editProduct.js

import axios from "axios";
import { backendUrl } from "./backendUrl"; // Ensure the backendUrl is correctly set

export const editProduct = async (product) => {
  try {
    const response = await axios.put(`${backendUrl}/products/${product.id}`, product);
    return response;
  } catch (error) {
    console.error("Error editing product", error);
    throw error;
  }
};
