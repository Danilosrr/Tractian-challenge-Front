import { useEffect, useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import useCompany from '../../hooks/useCompany';
import {  postNewUnit } from '../../services/assetsApi';


export default function NewUnit() {
  const [form] = Form.useForm();
  const companyId = useCompany();
  const navigate = useNavigate();

  useEffect(() => {
    if (!companyId) { navigate('/') };
  }, []);

  async function onFinish() {
    try {
      const data = form.getFieldsValue();
      const request = await postNewUnit(data,companyId);
      message.success('New unit registered');
    } catch (error) {
      message.error('Unit not registered');
      console.log(error);
    }
  }

  return (
    <Form
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '10px',
        marginLeft: '10vw',
        width: '80vw',
        height: '100%',
        backgroundColor: '#FFFFFF'
      }}
      form={form}
      layout="horizontal"
      onFinish={onFinish}
    >
      <b style={{ marginBottom: '10px', textAlign: 'center' }}> New Unit</b>
      <Form.Item
        name="name"
        label="Name"
        hasFeedback
        rules={[{ required: true, message: 'Please choose a name!' }]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
