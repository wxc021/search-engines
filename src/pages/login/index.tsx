import React,{useState} from 'react'
// import {Button} from 'antd'
import styles from './style.less';
// import '@/assets/js/logonAnimate.js'
// import {useHistory} from 'react-router-dom'
import { Form, Input, Button, Checkbox, Col, Row } from 'antd';

// const history = useHistory();
const Login =(props:any)=> {
const [data,setData] =useState('data数据')
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const onFinish = (values: any) => {
  console.log('Success:', values);
  props.history.push('/star-data/star-info')
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};


  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <h1>爱时尚搜索引擎平台</h1>
          <Row>
            <Col span={20}>
              <Form.Item
                label="用户名"
                name="username"
                rules={[
                  { required: true, message: '请填写用户名' },
                ]}
              >
                <Input autoComplete="off" />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={20}>
              <Form.Item
                label="密码"
                name="password"
                rules={[
                  { required: true, message: '请填写密码' },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
          </Row>
          <div className={styles.flexbox}>
          {/* <Form.Item> */}
            <Button
              className={styles['login-btn']}
              type="primary"
              htmlType="submit"
            >
              登录
            </Button>
            <Button
              className={styles['login-btn']}
              type="ghost"
              onClick={() => {
               
              }}
            >
              注册
            </Button>
            {/* </Form.Item> */}

          </div>
        </Form>
      </div>
    </div>
  );
}
export default Login;