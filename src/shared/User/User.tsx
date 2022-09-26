import React, { useEffect } from 'react';
import { Avatar, Dropdown, Menu, Space, Typography } from 'antd';
import userDropMenu from 'hooks/userDropMenu';
import { useLocation, useNavigate } from 'react-router-dom';
import DownOutlined from '@ant-design/icons/lib/icons/DownOutlined';

const User: React.FC = () => {
  const { userConfig } = userDropMenu();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') navigate('/1');
  }, []);

  return (
    <>
      <Avatar size={40}>
        <p>USER</p>
      </Avatar>
    </>
  );
};

export default User;
