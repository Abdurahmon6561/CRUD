import { Button, message } from "antd";
import { deleteProduct } from "../api";

const DeleteProduct = ({ productId, onDelete }) => {
  const handleDelete = async () => {
    const isAgree = window.confirm("Are you sure you want to delete?");
    if (isAgree) {
      try {
        const response = await deleteProduct(productId);
        if (response) {
          message.success("Product deleted");
          onDelete(productId); // Notify parent component about the deletion
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        message.error("Failed to delete product");
      }
    }
  };

  return (
    <div>
      <Button className="bg-red-600 text-white" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default DeleteProduct;
