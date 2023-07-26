'use client';

import React, {useState} from 'react';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Alert, Button, Form, Input} from 'antd';
import {LoginFormWrapper, StyledForm} from './styles';
import {signIn} from 'next-auth/react';
import {useRouter, useSearchParams} from 'next/navigation';

export const LoginForm: React.FC = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';
  const router = useRouter();
  const [failed, setFailed] = useState(false);
  const onFinish = async (values: any) => {
    setFailed(false);
    const res = await signIn('credentials', {
      email: values.username,
      password: values.password,
      redirect: false,
    });
    if (res && !res.error) {
      router.push('/profile');
    } else {
      setFailed(true);
      console.log(res);
    }
  };

  return (
    <LoginFormWrapper>
      <StyledForm name="normal_login" initialValues={{remember: true}} onFinish={onFinish}>
        <Form.Item name="username" rules={[{required: true, message: 'Please input your Username!'}]}>
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item name="password" rules={[{required: true, message: 'Please input your Password!'}]}>
          <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </StyledForm>

      <Button type="primary" onClick={() => signIn('google', {callbackUrl})}>
        Sign in with Google
      </Button>
      {failed && <Alert style={{marginTop: 20}} message="Wrong username or password" type="error" showIcon />}
    </LoginFormWrapper>
  );
};
