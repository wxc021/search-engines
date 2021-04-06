import {extend} from 'umi-request';
import {message} from 'antd';
const request = extend({
  prefix: '/api',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

request.interceptors.request.use((url, options) => {
  return {
    url: `${url}`,
    options: { ...options, interceptors: true },
  };
})
request.interceptors.response.use(async(response, options) => {
  const data = await response.clone().json();
  if(response.status && response.status === 200){
    if(data.code ===200){
      return response
    }else{
      message.error(data.message)
    }
  }
  else{
    message.error('网络异常')
  }
  return response
})
export default request;