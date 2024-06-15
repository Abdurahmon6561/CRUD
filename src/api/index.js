import axios from "axios";

const Url = "https://ecommerce-backend-fawn-eight.vercel.app/api"

export async function createProduct(data) {
  try {
    const response = await axios.post(
      `${Url}/products`,
      data
    );
    return response
  } catch (err) {
    console.log("Error creating", err);
  }
}

export async function getProductById(productId) {
  try {
    const response = await axios.get(
      `${Url}/products/${productId}`,
    );
    return response
  } catch (err) {
    console.log("Error edit", err);
  }
}


export async function deleteProduct(productId) {
    try{
const response= await axios.delete(`${Url}/products/${productId}`)
return response
    }catch(e){
        console.log("Product deleted", e);
    }
}