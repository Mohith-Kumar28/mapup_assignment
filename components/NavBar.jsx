import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import {Bars2Icon,XMarkIcon} from '@heroicons/react/24/outline'
import ThemeToggle from './ThemeToggle';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),

];
const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
      // style={{
      //   width: 256,
      // }}
      className='absolute top-16 left-8 z-30 '
    >

<div className=' p-1 bg-black/30 backdrop-blur-xl border-2 border-gray-600  rounded-t-[50px] gap-y-3 inline-flex flex-col rounded-b-[100px] mb-4'>
  <div className=''>
  <ThemeToggle/>
  </div>
      <button
        type="primary"
        onClick={toggleCollapsed}
      
        className='bg-gray-600 rounded-full p-4 '
      >
        {collapsed ? <Bars2Icon className=' w-10'/> : <XMarkIcon className=' w-10 '/>}
      </button>
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        className='rounded-xl'
      />
    </div>
  );
};
export default NavBar;