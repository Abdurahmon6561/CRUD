import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import {
  UserAddOutlined,
  AppstoreOutlined,
  ShopOutlined,
  UserOutlined,
  UploadOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const Layoutt = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" /><br /><br /><br />
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<UserAddOutlined />}>
            <NavLink to="/register">Register</NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreOutlined />}>
            <NavLink to="/categories">Categories</NavLink>
          </Menu.Item>
          <Menu.Item key="3" icon={<ShopOutlined />}>
            <NavLink to="/product">Product</NavLink>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <NavLink to="/create-user">Create user</NavLink>
          </Menu.Item>
          <Menu.Item key="5" icon={<UploadOutlined />}>
            <NavLink to="/upload">Upload File</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Abdurahmon
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Layoutt;
