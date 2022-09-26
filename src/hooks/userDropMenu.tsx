import React from 'react';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { useNavigate } from 'react-router-dom';

const userDropMenu = (): { userConfig: ItemType[] } => {
  const navigate = useNavigate();
  const userConfig = [
    {
      key: '/1',
      label: 'Страница пользователя',
      onClick: () => navigate('/1'),
    },
    {
      key: '/2',
      label: 'Редактировать',
      onClick: () => navigate('/2'),
    },
    {
      key: '/3',
      label: 'Выход',
      onClick: () => navigate('/3'),
    },
  ];
  return { userConfig };
};

export default userDropMenu;
