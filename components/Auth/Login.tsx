'use client';
import {useEffect, useState} from 'react';
import {useSearchParams, useRouter} from 'next/navigation';
import {signIn, useSession} from 'next-auth/react';
import {LockOutlined, MailOutlined} from '@ant-design/icons';
import {Button, Form, Input, Divider, Alert} from 'antd';

import {LinkTo, GoogleButton} from '@/components/Buttons';

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const params = useSearchParams()!;
  const session = useSession();
  const router = useRouter();
  const [error, setError] = useState<string | null>('');

  useEffect(() => {
    setError(params.get('error'));
  }, [params]);

  if (session.status === 'authenticated') {
    router?.push('/profile');
  }

  const formSubmit = (form: Inputs) => {
    console.log('form', form);
    const {email, password} = form;
    signIn('credentials', {
      email,
      password,
    });
  };

  return (
    <Form onFinish={formSubmit} style={{maxWidth: 450}}>
      <Form.Item name="email" rules={[{required: true, message: 'Please input your email!'}]}>
        <Input prefix={<MailOutlined />} placeholder="Email" />
      </Form.Item>

      <Form.Item name="password" rules={[{required: true, message: 'Please input your Password!'}]}>
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
        {error && <Alert style={{marginTop: 20}} message={error} type="error" showIcon />}
        <Divider>Or</Divider>
        <GoogleButton />
        <Divider />
        <LinkTo link="/register" text="Create an Account" />
      </Form.Item>
    </Form>
  );
};
