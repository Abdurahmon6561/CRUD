import { Button, Modal, Form, Input, message } from "antd";
import { useState } from "react";
import axios from "axios";
import { backendUrl } from "../api/backendUrl";

const EditProduct = ({ productId, onUpdate }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const showModal = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${backendUrl}/products/${productId}`);
      form.setFieldsValue(response.data); // Set form fields with fetched product data
      setIsModalVisible(true);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleUpdate = async (values) => {
    try {
      setLoading(true);
      const response = await axios.put(`${backendUrl}/products/${productId}`, values);
      message.success("Product updated successfully");
      onUpdate(response.data); // Notify parent component about the update
      setIsModalVisible(false);
    } catch (error) {
      console.error("Error updating product:", error);
      message.error("Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button type="link" className="bg-blue-600 p-4 text-white" onClick={showModal}>
        Edit
      </Button>
      <Modal
        title="Edit Product"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="update" type="primary" loading={loading} onClick={() => form.submit()}>
            Update
          </Button>,
        ]}
      >
        <Form form={form} onFinish={handleUpdate}>
          <Form.Item name="title" label="Title" rules={[{ required: true, message: "Title is required" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="subtitle" label="Subtitle" rules={[{ required: true, message: "Subtitle is required" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description" rules={[{ required: true, message: "Description is required" }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="size" label="Size" rules={[{ required: true, message: "Size is required" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="price" label="Price" rules={[{ required: true, message: "Price is required" }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item name="color" label="Color" rules={[{ required: true, message: "Color is required" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="image" label="Image URL" rules={[{ required: true, message: "Image URL is required" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="rate" label="Rate" rules={[{ required: true, message: "Rate is required" }]}>
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditProduct;
