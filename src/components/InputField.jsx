import { EyeInvisibleOutlined, EyeOutlined, UserOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { debounce } from 'lodash'
import { useCallback, useState } from 'react'

function InputField() {
  const [username, setUsername] = useState('')
  const [visible, setVisible] = useState('')

  const debouncefnc = useCallback(
    debounce((value)=>{
      setUsername(value)
      console.log(value)
    },700),[])

  const getUserName = (e)=>{
    debouncefnc(e.target.value)
  }

  return (
    <>
      <Input 
       placeholder='Enter your Name'
       type={visible ? "text": "password"} 
       style={{width:300}} 
       size='large' 
       onChange={getUserName}
       prefix={<UserOutlined/>}
       suffix={visible ? <EyeOutlined onClick={() => setVisible(false)} /> : <EyeInvisibleOutlined onClick={() => setVisible(true)} />}
       />
    </>
  )
}

export default InputField