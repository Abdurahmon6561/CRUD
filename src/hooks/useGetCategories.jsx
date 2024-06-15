import axios from "axios";
import { useEffect, useState } from "react";

const useGetCategories = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProduct() {
          try {
            const url = "https://ecommerce-backend-fawn-eight.vercel.app";
            const response = await axios.get(`${url}/api/categories`);
            console.log(response);
            if(response.data) setProducts(response.data);
          } catch (err) {
            console.log("Error getting product", err);
          }
        }
    
        getProduct();
      }, []);

  return products
}

export default useGetCategories