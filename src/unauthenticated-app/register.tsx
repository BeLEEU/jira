import { useAuth } from "context/auth-context";
import React from "react";
import {Form, Input} from 'antd'
import { LongButton } from "unauthenticated-app";

export const RegisterScreen = () => {
  
  const {register} = useAuth()

  const handleSubmit = (values: {username: string, password: string}) => {
    register(values);
  }

  return(<Form onFinish={handleSubmit}>
    <Form.Item name={'username'} rules={[{required: true, message: '请输入用户名'}]}>
      <Input type="text" id={'username'} placeholder={'用户名'}/>
    </Form.Item>
    <Form.Item name={'password'} rules={[{required: true, message: '请输入密码'}]}>
      <Input type="password" id={'password'} placeholder={'密码'}/>
    </Form.Item>
    <Form.Item>
      <LongButton htmlType={'submit'} type={'primary'}>注册</LongButton>
    </Form.Item> 
  </Form>)
}