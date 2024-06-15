import { Button, Modal } from "antd";
import { useState } from "react";
import ProductForm from "./CategoryForm";
import { createProduct, getProductById } from "../../api";

const EditProduct = ({productId}) => {
  console.log(productId);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [singleProduct, setSingleProduct] = useState(null)

  const showModal = async () => {
    setIsModalOpen(true);
    const product = await getProductById(productId);
    setSingleProduct(product.data);
    console.log(product);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleEdit= async (prodForm) => {
    const response = await createProduct(prodForm)
    if(response){
      alert("Product created")
    }
console.log(prodForm);
  }
  return (
    <div>
      <Button type="primary" onClick={showModal} className=" mb-4">
      Edit
      </Button> 
      <Modal
        title="Edit Product"
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <ProductForm onSubmit={handleEdit} initialState={singleProduct}/>
      </Modal>
    </div>
  );
};

export default EditProduct;
