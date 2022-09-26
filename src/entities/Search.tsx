import React from 'react';
import { Input, Space } from 'antd';

const { Search } = Input;
const onSearch = (value: string) => console.log(value);

const MainSearch: React.FC = () => (
  <Space direction="vertical">
    <Search placeholder="input search text" onSearch={onSearch} enterButton />
  </Space>
);

export default MainSearch;
