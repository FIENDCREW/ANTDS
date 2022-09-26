import React, { FC, useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import useSiderConfig from 'hooks/useSiderConfig';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import MainSearch from 'entities/Search';
import User from 'shared/User/User';
import style from './PageLayout.module.scss';

const { Header, Footer, Sider, Content } = Layout;

interface IPageLayout {
  children: React.ReactNode;
}

const PageLayout: FC<IPageLayout> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { siderConfig } = useSiderConfig();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') navigate('/home');
  }, []);

  const handleSiderToggle = () => setIsCollapsed((prev) => !prev);

  const collapsedSiderStn = isCollapsed ? (
    <MenuUnfoldOutlined onClick={handleSiderToggle} />
  ) : (
    <MenuFoldOutlined onClick={handleSiderToggle} />
  );

  return (
    <Layout className={style.main_layout}>
      <Sider trigger={null} collapsible collapsed={isCollapsed}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[pathname]}
          items={siderConfig}
          className={style.main_layout__sider_menu}
        />
      </Sider>
      <Layout className={style.main_sublayout}>
        <Header className={style.main_layout__header}>
          {collapsedSiderStn}
          <User />
        </Header>
        <Content className={style.main_layout__content}>{children}</Content>
        <Footer className={style.main_layout__footer}>
          <MainSearch />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
