import { useEffect, useState } from 'react';
import { Avatar, List, Tooltip } from 'antd';
import { WhatsAppOutlined, MailOutlined } from '@ant-design/icons';
import { getAllUsers } from '../../services/usersApi';

export default function Users() {
  const [usersData, setUserData] = useState([]);
  const companyId = '634520bc05727a7eb274cf43'; //Obter de um context 

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

  return (
    <>
      <List
        style={{ ...usersContainer }}
        itemLayout="horizontal"
      >
        {usersData.map(user => {
          return (
            <List.Item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF', width: 'calc(100vw - 20px)' }}>
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