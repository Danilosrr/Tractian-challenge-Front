import { useEffect, useState } from 'react';
import { Avatar, Button, List, Tooltip } from 'antd';
import { WhatsAppOutlined, MailOutlined, PlusOutlined } from '@ant-design/icons';
import { getAllUsers } from '../../services/usersApi';
import useCompany from '../../hooks/useCompany';

export default function Users() {
  const [usersData, setUserData] = useState([]);
  const companyId = useCompany();

  useEffect(() => {
    const allUsers = async () => {
      const data = await getAllUsers(companyId);
      setUserData(data);
    }

    allUsers();
  }, []);

  const usersContainer = {
    display: 'flex',
    alignItems: 'flex-start',
    margin: '10px',
    position: 'absolute',
    top: 0,
    bottom: 0,
    overflowY: 'scroll',
    backgroundColor: 'transparent',
    width: 'calc(100vw - 20px)',
  };
  const listItem = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#FFFFFF', 
    width: 'calc(100vw - 20px)' 
  };
  
  return (
    <>
      <List
        style={{ ...usersContainer }}
        itemLayout="horizontal"
      >
        <Button style={{...listItem, flexDirection:'column', height:'100%', marginBottom:'10px'}} type='dashed' icon={<PlusOutlined style={{ fontSize: '40px' }}/>}>
          Add new user
        </Button>
        {usersData.map(user => {
          return (
            <List.Item style={listItem} >
              <>
                <List.Item.Meta
                  style={{ padding: '0 10px' }}
                  avatar={<Avatar src={!!user.picture ? user.picture : ''} />}
                  title={user.name}
                  description={!!user.email ? user.email : ''}
                />
                <Tooltip title={user.phone}>
                  <WhatsAppOutlined style={{ padding: '0 10px', fontSize: '20px' }} />
                </Tooltip>
                <MailOutlined style={{ padding: '0 10px', fontSize: '20px' }} />
              </>
            </List.Item>
          )
        })}
      </List>
    </>
  )
};