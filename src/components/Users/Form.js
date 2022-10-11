import { useEffect } from 'react';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import useCompany from '../../hooks/useCompany';
import { postNewUser } from '../../services/usersApi';


export default function NewUser() {
  const [form] = Form.useForm();
  const companyId = useCompany();
  const navigate = useNavigate();

  useEffect(() => {
    if (!companyId) { navigate('/') };
  }, []);

  async function onFinish() {
    try {
      const data = form.getFieldsValue();
      const request = await postNewUser(data, companyId);
      message.success('New user registered');
    } catch (error) {
      message.error('User not registered');
      console.log(error);
    }
  }

  return (
    <Form
      style={{
        display: 'flex',
        justifyContent: 'center',
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

      <Form.Item
        name="role"
        label="Role"
        hasFeedback
        rules={[{ required: true, message: 'Please choose a role!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone"
        hasFeedback
        rules={[{
          required: true,
          pattern: new RegExp(/^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/),
          message: "Wrong phone format!"
        }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        hasFeedback
        rules={[{ required: true, message: 'Please choose a email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="picture"
        label="Picture"
        hasFeedback
        rules={[{ required: true, message: 'Please choose a picture Url!' }]}
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
