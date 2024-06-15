import { Button, Modal } from "antd";
import { useState } from "react";
import CategoryForm from "./CategoryForm";
import { createProduct } from "../../api";

const CreateProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleCreate= async (prodForm) => {
    const response = await createProduct(prodForm)
    if(response){
      alert("Product created")
    }
  }
  return (
    <div>
      <Button type="primary" onClick={showModal} className=" mb-4">
        Create Category
      </Button> 
      <Modal
        title="New Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <CategoryForm onSubmit={handleCreate}/>
      </Modal>
    </div>
  );
};

export default CreateProduct;
