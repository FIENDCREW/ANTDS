import React, { FC, useEffect } from 'react';
import { Layout } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from 'shared/Header/Header';
import Footer from 'shared/Footer/Footer';
import style from './PageLayout.module.scss';

const { Content } = Layout;

interface IPageLayout {
  children: React.ReactNode;
}

const PageLayout: FC<IPageLayout> = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') navigate('/home');
  }, [navigate, pathname]);

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
