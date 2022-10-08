import 'antd/dist/antd.css';
import { Menu, Space } from 'antd';
import { MenuOutlined, FundViewOutlined, BlockOutlined, TableOutlined, TeamOutlined } from '@ant-design/icons';
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export function MainApp() {
  const navigate = useNavigate();

  return (
    <>
      <Menu mode="horizontal">
        <Menu.SubMenu key="SubMenu" title="Menu" icon={<MenuOutlined />}>
          <Menu.Item key="SubMenu1" icon={<FundViewOutlined />} onClick={()=>{navigate(`/app/home`)}}>
            Overview
          </Menu.Item>
          <Menu.Item key="SubMenu2" icon={<BlockOutlined />} onClick={()=>{navigate(`/app/units`)}}>
            Units
          </Menu.Item>
          <Menu.Item key="SubMenu3" icon={<TableOutlined />} onClick={()=>{navigate(`/app/assets`)}}>
            Assets
          </Menu.Item>
          <Menu.Item key="SubMenu4" icon={<TeamOutlined />} onClick={()=>{navigate(`/app/users`)}}>
            Users
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>

      <Space
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: 'lightsalmon',
          position: 'fixed',
          top: '45px',
          bottom: 0,
          width: '100%',
          height: 'calc(100% - 45px)',
          overflow: 'hidden',
          flexWrap: 'wrap',
        }}
      >
        <Outlet />
      </Space>
    </>
  );
}