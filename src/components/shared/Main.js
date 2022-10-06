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
          <Menu.Item key="SubMenu2" icon={<BlockOutlined />} onClick={()=>{navigate(`/app/Units`)}}>
            Units
          </Menu.Item>
          <Menu.Item key="SubMenu3" icon={<TableOutlined />} onClick={()=>{navigate(`/app/Assets`)}}>
            Assets
          </Menu.Item>
          <Menu.Item key="SubMenu4" icon={<TeamOutlined />} onClick={()=>{navigate(`/app/Users`)}}>
            Users
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>

      <Space
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Outlet />
      </Space>
    </>
  );
}