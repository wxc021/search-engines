import React,{useState} from 'react'
import {Button} from 'antd'

const Login =()=> {
const [data,setData] =useState('data数据')



  return (
    <div>
      登录页{data}
      <Button type="primary">登录按钮</Button>
    </div>
  )
}
export default Login;