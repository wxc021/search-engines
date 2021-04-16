import React,{useState} from 'react'
import {Button} from 'antd'

const Starcomprehensive =()=> {
const [data,setData] =useState('Starcomprehensive:data数据')



  return (
    <div>
      Starcomprehensive{data}
      <Button type="primary">Starcomprehensive</Button>
    </div>
  )
}
export default Starcomprehensive;