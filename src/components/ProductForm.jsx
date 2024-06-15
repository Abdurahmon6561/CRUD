// /src/components/ProductForm.jsx

import { useEffect, useState } from "react";
import { Button, Input } from "antd";
import axios from "axios";
import Joi from "joi";
import { backendUrl } from "../api/backendUrl";

const ProductForm = ({ onSubmit, initialValue }) => {
  const initialState = {
    title: "",
    subtitle: "",
    description: "",
    size: "",
    price: "",
    color: "",
    image: "",
    rate: "",
  };

  const [prodForm, setProdForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    title: Joi.string().min(1).required(),
    subtitle: Joi.string().min(1).required(),
    description: Joi.string().min(1).required(),
    size: Joi.string().min(1).required(),
    price: Joi.number().greater(0).required(),
    color: Joi.string().min(1).required(),
    image: Joi.string().uri().required(),
    rate: Joi.number().min(0).max(5).required(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProdForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const validateForm = () => {
    const result = schema.validate(prodForm, { abortEarly: false });
    if (!result.error) {
      return null;
    }

    const validationErrors = {};
    for (let item of result.error.details) {
      validationErrors[item.path[0]] = item.message;
    }
    return validationErrors;
  };

  const handleCreateOrUpdate = async () => {
    const validationErrors = validateForm();
    if (validationErrors) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      };
      let response;
      if (initialValue) {
        response = await axios.put(`${backendUrl}/products/${initialValue.id}`, prodForm, { headers });
      } else {
        response = await axios.post(`${backendUrl}/products`, prodForm, { headers });
      }
      console.log(response);
    } catch (err) {
      console.log("Something went wrong", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateOrUpdate();
    onSubmit(prodForm);
  };

  useEffect(() => {
    if (initialValue) {
      setProdForm(initialValue);
    }
  }, [initialValue]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-around mt-4">
          <div>
            <Input
              placeholder="Title"
              name="title"
              value={prodForm.title}
              onChange={handleChange}
            />
            {errors.title && <div style={{ color: "red" }}>{errors.title}</div>}
          </div>
          <div>
            <Input
              placeholder="Subtitle"
              name="subtitle"
              value={prodForm.subtitle}
              onChange={handleChange}
            />
            {errors.subtitle && <div style={{ color: "red" }}>{errors.subtitle}</div>}
          </div>
        </div>
        <div className="flex justify-around mt-4">
          <div>
            <Input
              placeholder="Description"
              name="description"
              value={prodForm.description}
              onChange={handleChange}
            />
            {errors.description && <div style={{ color: "red" }}>{errors.description}</div>}
          </div>
          <div>
            <Input
              placeholder="Size"
              name="size"
              value={prodForm.size}
              onChange={handleChange}
            />
            {errors.size && <div style={{ color: "red" }}>{errors.size}</div>}
          </div>
        </div>
        <div className="flex justify-around mt-4">
          <div>
            <Input
              placeholder="Price"
              name="price"
              type="number"
              value={prodForm.price}
              onChange={handleChange}
            />
            {errors.price && <div style={{ color: "red" }}>{errors.price}</div>}
          </div>
          <div>
            <Input
              placeholder="Color"
              name="color"
              value={prodForm.color}
              onChange={handleChange}
            />
            {errors.color && <div style={{ color: "red" }}>{errors.color}</div>}
          </div>
        </div>
        <div>
          <Input
            placeholder="Rate"
            className="mt-4 w-[183px] ml-[150px]"
            name="rate"
            type="number"
            value={prodForm.rate}
            onChange={handleChange}
          />
          {errors.rate && <div style={{ color: "red" }}>{errors.rate}</div>}
        </div>
        <div>
          <Input
            placeholder="Image Address"
            className="mt-4 w-[420px] ml-[26px]"
            name="image"
            value={prodForm.image}
            onChange={handleChange}
          />
          {errors.image && <div style={{ color: "red" }}>{errors.image}</div>}
        </div>
        <Button type="primary" htmlType="submit" className="w-[420px] ml-[26px] mt-4">
          {initialValue ? "Update" : "Create"}
        </Button>
      </form>
    </div>
  );
};

export default ProductForm;
