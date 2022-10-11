import { useEffect, useState } from "react";
import { Button, Badge, Descriptions, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getUnitAssets } from "../../services/assetsApi";
import { groupBy, statusColor } from "../../services/utils";

export default function Units() {
  const [unitsOverallData, setUnitsOverallData] = useState([]);

  useEffect(() => {
    const companyId = '634520bc05727a7eb274cf43'; //Obter de um context 

    const allUnits = async () => {
      const data = await getUnitAssets(companyId);
      data.forEach(unit => {
        unit.assets.forEach(asset => {
          asset.color = statusColor(asset.status)
        });
      })
      setUnitsOverallData(data);
    }

    allUnits();
  }, []);

  const unitContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    height: '50%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Health',
      dataIndex: 'y',
      key: 'health',
      sorter: (a, b) => a.y - b.y,
      render: (text) => <p>{text}%</p>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      sorter: (a, b) => a.status.localeCompare(b.status),
      render: (text) => <Badge color={statusColor(text)} text={text} />,
    }
  ];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px',
        gap: '10px',
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        flexWrap: 'wrap',
        overflowY: 'scroll'
      }}
    >
      <Button type="dashed" icon={<PlusOutlined style={{ fontSize: '40px' }} />} size={'large'} style={{ ...unitContainer, backgroundColor: 'transparent' }}>
        Add new unit
      </Button>

      {unitsOverallData.map(unit => {
        const group = groupBy(unit.assets, 'status');
        return (
          <Descriptions title={unit.name} style={{ ...unitContainer, padding: '10px', height: 'min-content' }}>
            <Descriptions.Item label="Company" span={3}>Zhou Maomao</Descriptions.Item>
            {group.map(status => {
              return (
                <Descriptions.Item label={status.name}>{status.y}</Descriptions.Item>
              )
            })}
            <Descriptions.Item>
              <Table columns={columns} dataSource={unit.assets} style={{ width: '100%'}} pagination={false}/>
            </Descriptions.Item>
          </Descriptions>
        )
      }
      )}
    </div>
  )
};
