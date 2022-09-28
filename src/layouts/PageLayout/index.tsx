import React, { FC, useEffect, useState } from 'react';
import { Layout } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './PageLayout.module.scss';
import Header from 'shared/Header/Header';
import Footer from 'shared/Footer/Footer';

const { Content } = Layout;

interface IPageLayout {
  children: React.ReactNode;
}

const PageLayout: FC<IPageLayout> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') navigate('/home');
  }, []);

  const handleSiderToggle = () => setIsCollapsed((prev) => !prev);

  // const collapsedSiderStn = isCollapsed ? (
  //   <MenuUnfoldOutlined onClick={handleSiderToggle} />
  // ) : (
  //   <MenuFoldOutlined onClick={handleSiderToggle} />
  // );

  return (
    <Layout className={style.main_layout}>
      <Layout className={style.main_sublayout}>
        <Header />
        <Content className={style.main_layout__content}>{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default PageLayout;
