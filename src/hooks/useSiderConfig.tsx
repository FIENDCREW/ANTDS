import React from 'react';
import { HomeOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { useNavigate } from 'react-router-dom';

const useSiderConfig = (): { siderConfig: ItemType[] } => {
  const navigate = useNavigate();
  const siderConfig = [
    {
      key: '/home',
      icon: <HomeOutlined />,
      label: 'Главная',
      onClick: () => navigate('/home'),
    },
    {
      key: '/search',
      icon: <SearchOutlined />,
      label: 'Поиск',
      onClick: () => navigate('/search'),
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: 'Настройки',
      onClick: () => navigate('/settings'),
    },
  ];
  return { siderConfig };
};

export default useSiderConfig;
