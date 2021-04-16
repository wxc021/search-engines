import React,{useState} from 'react'
import {Button} from 'antd'
// import {useHistory} from 'react-router-dom'

// const history = useHistory();
const Login =(props:any)=> {
const [data,setData] =useState('data数据')



  return (
    <div>
      登录页{data}
      <Button type="primary" onClick={()=> {
        // history.push('/star-data/star-info')
        console.log(props.history.push('/star-data/star-info'));
        
      }}>登录按钮</Button>
    </div>
  )
}
export default Login;