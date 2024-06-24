import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const Layoutt = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" /><br /><br /><br />
        <Menu theme="dark" mode="inline">
        <Menu.Item key="1">
            <NavLink to="/register">Register</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/categories">Categories</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/product">Product</NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to="/create-user">Create user</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Layoutt;
