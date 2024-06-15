import { useState } from "react";
import { Button, Input, message } from "antd";
import axios from "axios";
import Joi from 'joi'; // Import Joi for validation

const ProductForm = () => {
  const initialState = {
    name: "",
    image: "",
  };

  const [prodForm, setProdForm] = useState(initialState);

  const schema = Joi.object({ // Define Joi schema
    name: Joi.string().required(),
    image: Joi.string().uri().required(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProdForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleCreate = async () => {
    const { error } = schema.validate(prodForm);

    if (error) {
      message.error(error.details[0].message);
      return;
    }


    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      };

      const response = await axios.post(
        `https://ecommerce-backend-fawn-eight.vercel.app/api/categories`,
        prodForm,
        { headers }
      );

      console.log("Product created:", response.data);
      message.success("Product created successfully");

      setProdForm(initialState);
    } catch (err) {
      console.error("Error creating product:", err);
      message.error("Failed to create product. Please try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreate();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-around mt-4">
          <div>
            <Input
              placeholder="Name"
              name="name"
              value={prodForm.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-around mt-4">
          <div>
            <Input
              placeholder="Image Address"
              name="image"
              value={prodForm.image}
              onChange={handleChange}
            />
          </div>
        </div>
        <Button type="primary" htmlType="submit" className="w-[420px] ml-[26px] mt-4">
          Create
        </Button>
      </form>
    </div>
  );
};

export default ProductForm;
