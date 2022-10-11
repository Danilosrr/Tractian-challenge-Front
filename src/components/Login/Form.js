import { useEffect } from 'react';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import useCompany from '../../hooks/useCompany';
import { postNewUnit } from '../../services/assetsApi';
import { postCompanies } from '../../services/companyApi';


export default function NewCompany() {
  const [form] = Form.useForm();
  const companyId = useCompany();
  const navigate = useNavigate();

  async function onFinish() {
    try {
      const data = form.getFieldsValue();
      const request = await postCompanies(data);
      message.success('New company registered');
      navigate('/');
    } catch (error) {
      message.error('Unit company registered');
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
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '100%',
      }}
      form={form}
      layout="horizontal"
      onFinish={onFinish}
    >
      <b style={{ marginBottom: '10px', textAlign: 'center' }}> New Company</b>
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
