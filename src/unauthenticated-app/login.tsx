import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";
import {Form, Button, Input} from 'antd'

interface Base{
  id: number
}

interface Person extends Base {
  name: string
}


export const LoginScreen = () => {
  
  const {login, user} = useAuth()

  const handleSubmit = (values: {username: string, password: string}) => {
    login(values);
  }

  return(<Form onFinish={handleSubmit}>
    <Form.Item name={'username'} rules={[{required: true, message: '请输入用户名'}]}>
      <Input type="text" id={'username'} placeholder={'用户名'}/>
    </Form.Item>
    <Form.Item name={'password'} rules={[{required: true, message: '请输入密码'}]}>
      <Input type="password" id={'password'} placeholder={'密码'}/>
    </Form.Item>
    <Form.Item>
      <Button htmlType={'submit'} type={'primary'}>登录</Button>
    </Form.Item> 
  </Form>)
}