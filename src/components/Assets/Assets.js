import { useEffect, useState } from "react";
import { Button, Badge, Descriptions, Space, Image, Progress } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getAllAssets } from "../../services/assetsApi";
import { statusColor } from "../../services/utils";

export default function Assets() {
  const [allAssetsData, setAllAssetsData] = useState([]);

  useEffect(() => {
    const companyId = '633d204450cf920b1b527fe7'; //Obter de um context 

    const allAssets = async () => {
      const data = await getAllAssets(companyId);
      setAllAssetsData(data);
    }

    allAssets();
  }, []);

  const unitContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    position: 'absolute',
    backgroundColor: 'transparent',
    width: '100%',
    height: '50%',
  };

  return (
    <>
      <Button style={{ ...unitContainer, top: 0, flexDirection: 'column' }} icon={<PlusOutlined style={{ fontSize: '40px' }} />} type='dashed'>
        Add new asset
      </Button>
      <Space style={{ ...unitContainer, justifyContent: 'flex-start', bottom: 0, overflowX: 'scroll', overflowY: 'hidden' }}>
        {allAssetsData.map(asset => {
          return (
            <Space style={{ backgroundColor: '#FFFFFF', padding: '10px' }}>
              <Image width={100} src="https://aprender.buzzero.com/buzzers/wilson-schwebel/41350/HotSiteImage.jpg" />
              <Descriptions title={asset.name} style={{ height: '100%', width: 'max-content' }} size='small' bordered>
                <Descriptions.Item span={3}>{<Badge color={statusColor(asset.status)} text={asset.status} />}</Descriptions.Item>
                
                <Descriptions.Item label='health' span={3}>
                  <Progress size="small" percent={asset.y} status="active"/>
                </Descriptions.Item>

                <Descriptions.Item label='Unit' span={1}>{asset.unit}</Descriptions.Item>
                <Descriptions.Item label='owner' span={2}>{asset.owner}</Descriptions.Item>
                <Descriptions.Item label='model' span={3}>{asset.model}</Descriptions.Item>
                <Descriptions.Item label='description' span={3}>{asset.description}</Descriptions.Item>
              </Descriptions>
            </Space>
          )
        })}
      </Space>
    </>
  )
};
