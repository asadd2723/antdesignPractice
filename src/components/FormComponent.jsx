import { Button, Form, Input } from 'antd'
import React from 'react'

function FormComponent() {
  return (
    <div className='pt-24'>
      <Form style={{width:500}}>
        <Form.Item label='User Name' name={'username'}>
          <Input placeholder='Enter your Name'></Input>
        </Form.Item >
        <Form.Item label='Password' name={'password'}>
          <Input.Password placeholder='Enter your Password'></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button>Log In</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default FormComponent