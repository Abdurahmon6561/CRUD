import { Table } from "antd";
import EditCategory from "./EditCategory";

const columns = [
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (imgUrl) => {
      return <img src={imgUrl} alt="product" style={{ width: '100px' }} />;
    }
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: "Edit",
    dataIndex: 'edit',
    render: (_, record) => {
      return <EditCategory productId={record._id} />
    }
  }
];

const CategoryTable = ({ products }) => {
  return (
    <Table columns={columns} dataSource={products} rowKey="id" />
  );
};

export default CategoryTable;
