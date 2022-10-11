import { useEffect, useState } from 'react';
import { Button, Slider, Form, Input, Radio, Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import useCompany from '../../hooks/useCompany';
import { getUnitAssets, postNewAsset } from '../../services/assetsApi';


export default function NewAsset() {
  const [units, setUnits] = useState([]);
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const companyId = useCompany();

  useEffect(() => {
    if (!companyId) { navigate('/') };

    const allUnits = async () => {
      const response = await getUnitAssets(companyId);
      const data = response.map(unit => { return { name: unit.name } });
      setUnits(data);
      console.log(data);
    };

    allUnits();
  }, []);

  function onFinish() {
    try {
      const data = form.getFieldsValue();
      //const request = postNewAsset({...data,companyId});
      console.log('submited: ', {...data,companyId})
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        overflowY: 'scroll',
        padding: '10px',
        marginLeft: '10vw',
        width: '80vw',
        height: '90vh',
        overflowY: 'scroll',
        backgroundColor: '#FFFFFF'
      }}
      size='small'
      form={form}
      layout="horizontal"
      onFinish={onFinish}
    >
      <b style={{ marginBottom: '10px', textAlign: 'center' }}> New asset</b>
      <Form.Item
        name="name"
        label="Name"
        hasFeedback
        rules={[{ required: true, message: 'Please choose a name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="model"
        label="Model"
        hasFeedback
        rules={[{ required: true, message: 'Please choose a model!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="owner"
        label="Owner"
        hasFeedback
        rules={[{ required: true, message: 'Please choose owner!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="unit"
        label="Unit"
        hasFeedback
        rules={[{ required: true, message: 'Please select a unit!' }]}
      >
        <Select>
          {units.map(unit => {
            return (
              <Select.Option key={unit.name} value={unit.name}>{unit.name}</Select.Option>
            )
          })}
        </Select>
      </Form.Item>
      <Form.Item label="image">
        <Input />
      </Form.Item>
      <Form.Item
        name='status'
        label="Status"
        hasFeedback
        rules={[{ required: true, message: 'Please select a status!' }]}
      >
        <Radio.Group>
          <Radio.Button value="Running">Running</Radio.Button>
          <Radio.Button value="Allerting">Allerting</Radio.Button>
          <Radio.Button value="Stopped">Stopped</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item name='health' label="Health">
        <Slider
          marks={{
            0: '0',
            50: '50',
            100: '100',
          }}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
