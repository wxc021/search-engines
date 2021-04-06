import React,{useEffect,useState} from 'react'
import styles from './style.less';
import LogoImg from '@/assets/logo.png';
import { SearchOutlined,UserOutlined,BellOutlined } from '@ant-design/icons'
const Headers =(props:any)=> {
  const [data,setData] = useState('');
  return(
    <div className={styles['header']}>
      <div className={styles['header-content']}>
        <img src={LogoImg} alt="logo"/>
        <div className={styles["header-right"]}>
          <SearchOutlined className={styles["search-icon"]}/>
          <BellOutlined className={styles["search-icon"]}/>
          <UserOutlined className={styles["search-icon"]}/>
          <span>wangxuchun</span>
        </div>
      </div>
    </div>
  )
}
export default Headers;

