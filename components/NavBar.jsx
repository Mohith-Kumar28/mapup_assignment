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
import {Bars2Icon,XMarkIcon,MapIcon,Square3Stack3DIcon} from '@heroicons/react/24/outline'
import ThemeToggle from './ThemeToggle';
import { useDispatch, useSelector } from 'react-redux';
import { setMapType } from '@/redux/regionSlice';
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
  getItem('3D Globe', '3d', <Square3Stack3DIcon className=' w-5'/>),
  getItem('2D Map', '2d', <MapIcon className=' w-5' />),
  // getItem('Option 3', '3', <ContainerOutlined />),

];
const NavBar = () => {
  const dispatch=useDispatch()
  const [collapsed, setCollapsed] = useState(false);
  const nightMode = useSelector((state) => state.nightMode);
  const enabled = useSelector((state) => state.nightMode);

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

<div className={`${nightMode?'bg-black/30 border-gray-600':'bg-white/30 border-gray-300'} p-1  backdrop-blur-xl border-2   rounded-t-[50px] gap-y-3 inline-flex flex-col rounded-b-[100px] mb-4`}>
  <div className=''>
  <ThemeToggle/>
  </div>
      <button
        type="primary"
        onClick={toggleCollapsed}
      
        className={` ${nightMode?'bg-gray-500':'bg-white text-gray-900'} rounded-full p-4 `}
      >
        {collapsed ? <Bars2Icon className=' w-10'/> : <XMarkIcon className=' w-10 '/>}
      </button>
      </div>
      <Menu
        defaultSelectedKeys={['3d']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme={nightMode?'dark':'light'}
        inlineCollapsed={collapsed}
        items={items}
        className='rounded-xl'
        onClick={(e)=>{dispatch(setMapType(e.key))}}
      />
    </div>
  );
};
export default NavBar;