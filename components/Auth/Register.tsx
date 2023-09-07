'use client';

import {Button, Form, Input, Divider, Alert} from 'antd';
import {useRouter} from 'next/navigation';
import {useState} from 'react';
import {useSession} from 'next-auth/react';
import {LockOutlined, UserOutlined, MailOutlined} from '@ant-design/icons';

import {LinkTo, GoogleButton} from '@/components/Buttons';

type Inputs = {
  email: string;
  name: string;
  password: string;
};

export const RegisterForm = () => {
  const router = useRouter();
  const session = useSession();

  if (session.status === 'authenticated') {
    router?.push('/my/dashboard');
  }

  const [message, setMessage] = useState<null | string>(null);

  const formSubmit = async (form: Inputs) => {
    const {name, email, password} = form;

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push('/login?success=Account has been created');
    } catch (err: any) {
      setMessage(err);
    }
  };

  return (
    <Form onFinish={formSubmit} style={{maxWidth: 450}}>
      <Form.Item name="name" rules={[{required: true, message: 'Please input your name!'}]}>
        <Input prefix={<UserOutlined />} placeholder="Name" />
      </Form.Item>

      <Form.Item name="email" rules={[{required: true, message: 'Please input your email!'}]}>
        <Input prefix={<MailOutlined />} placeholder="Email" />
      </Form.Item>

      <Form.Item name="password" rules={[{required: true, message: 'Please input your Password!'}]}>
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
        {message && <Alert style={{marginTop: 20}} message={message} type="error" showIcon />}
        <Divider>Or</Divider>
        <GoogleButton />
        <Divider />
        <LinkTo link="/login" text="Login with an existing account" />
      </Form.Item>
    </Form>
  );
};
