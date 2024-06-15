import { Table } from "antd";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";

const columns = [
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (imgUrl) => <img src={imgUrl} alt="product" style={{ width: '100px' }} />,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Subtitle',
    dataIndex: 'subtitle',
    key: 'subtitle',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (price) => `$${price}`,
  },
  {
    title: "Edit",
    dataIndex: 'edit',
    render: (_, record) => <EditProduct productId={record._id} />,
  },
  {
    title: "Delete",
    dataIndex: 'delete',
    render: (_, record) => <DeleteProduct productId={record._id} />,
  }
];

const ProductsTable = ({ products }) => {
  return (
    <Table columns={columns} dataSource={products} rowKey="_id" />
  );
};

export default ProductsTable;
