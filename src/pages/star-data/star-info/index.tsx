import React,{useEffect,useState} from 'react'
import Headers from '@/components/header';
import './style.less'
import { Area,Radar } from '@ant-design/charts';
import { DataSet } from '@antv/data-set';
import { connect } from 'dva';
import { Breadcrumb, Select, Radio, Rate, Table } from 'antd';
import request from '@/utils/request';
import { CaretUpOutlined, CaretDownOutlined} from '@ant-design/icons'

import kunkunImg from '@/assets/kunkun.jpeg';
const { Option } = Select;
const StarInfo =(props:any)=> {
  const [dataArea, setDataArea] = useState([]);
  const [dataRadar, setDataRadar] = useState([
    { "item": "销量", "蔡徐坤": 7, "范丞丞": 3 , "王一博": 6 },
    { "item": "同款", "蔡徐坤": 6, "范丞丞": 7 , "王一博": 8 },
    { "item": "预购", "蔡徐坤": 5, "范丞丞": 6 , "王一博": 3 },
    { "item": "送花", "蔡徐坤": 6, "范丞丞": 4 , "王一博": 4 },
    { "item": "好感", "蔡徐坤": 5, "范丞丞": 6 , "王一博": 8 }
  ]);
  const [list,setList] = useState([
    {
      key: '1',
      name: '胡彦斌',
      play: '图灵',
      director: '温子仁',
      createTime:'2021-04-06'
    },
    {
      key: '2',
      name: '陀枪少年',
      play: '雅马哈',
      director: '温文成',
      createTime:'2019-04-06'
    },
])
  const getData = () => {
    request.post('/getMenu', {
      data:{
        adc:'123',
        name:'123'
      }
    }).then(res=> {
      console.log(res);
      
    })
  }
  useEffect(() => {
    asyncFetch();
    console.log(props.data);
    getData();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setDataArea(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const configArea = {
    data: dataArea,
    xField: 'Date',
    yField: 'scales',
    xAxis: { tickCount: 15 },
    slider: {
      start: 0.1,
      end: 0.9,
      trendCfg: { isArea: true },
    },
  };
  
  const { DataView } = DataSet;
  const dv = new DataView().source(dataRadar);
  dv.transform({
    type: 'fold',
    fields: ['蔡徐坤', '范丞丞', '王一博'], // 展开字段集
    key: 'user', // key字段
    value: 'score', // value字段
  });
  const configRadar = {
    data: dv.rows,
    xField: 'item',
    yField: 'score',
    seriesField: 'user',
    meta: {
      score: {
        alias: '分数',
        min: 0,
        max: 10,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          style: {
            lineDash: null,
          },
        },
      },
    },
    yAxis: {
      line: null,
      tickLine: null,
      grid: {
        line: {
          type: 'line',
          style: {
            lineDash: null,
          },
        },
        // alternateColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    tooltip: {
      formatter: (datum:any) => {
        return { name: datum.user, value:'指数:'+ datum.score };
      },
    },
    // 开启辅助点
    point: {},
  };
  // 
  const handleChange=(value:string)=> {
    console.log(`selected ${value}`);
  }
  const onChange=(e:any)=> {
    console.log(`radio ${e.target.value}`);
  }
  const columns = [
    {
      title: '影视名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '饰演',
      dataIndex: 'play',
      key: 'play',
    },
    {
      title: '导演',
      dataIndex: 'director',
      key: 'director',
    },
    {
      title: '上映时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
  ];
  return(
    <div className="star-info">
      <Headers></Headers>
      <div className="star-deails">
        <div className="star-deails-wrap">
          <Breadcrumb>
            <Breadcrumb.Item>明星榜单</Breadcrumb.Item>
            <Breadcrumb.Item>蔡徐坤</Breadcrumb.Item>
          </Breadcrumb>
          <div className="star-details">
            <div className="star-details-imgs">
              <img src={kunkunImg} alt="蔡徐坤"/>
              <div className="star-details-info">
                <h2>蔡徐坤</h2>
                <p>危机探查: <span className="icon-btn">政治相关</span><span className="icon-btn">两性相关</span></p>
                <p>出生日期: <span className="mr20">1982-08-02</span>身高:<span>181cm</span></p>
                <p>经纪公司:<span>海尧（上海）影视传媒有限公司</span></p>
                <p>基本资料:</p>
                <p>蔡徐坤，中国内地男演员、歌手，1998年8月2日出生于浙江省，曾是SWIN-S组合的成员，但后来退出了。SWIN-S组合包括刘也、赵品霖、俞更寅、蔡徐坤、何屹繁、吾木提·吐尔逊6名成员。蔡徐坤喜欢篮球、游泳、健身，他的座右铭是“梦想是陪我睡觉的东西，不实现它我会失眠。”</p>
              </div>
            </div>
            <div className="star-details-stars">
              <p>综合价值:<span className="star-score">92</span></p>
              <div>传播指数:<Rate disabled value={3} className="star-style"></Rate>3星</div>
              <div>口碑指数:<Rate disabled value={3} className="star-style"></Rate>3星</div>
              <div>潜力指数:<Rate disabled value={3} className="star-style"></Rate>3星</div>
              <div>危机指数:<Rate disabled value={3} className="star-style"></Rate>3星</div>
            </div>
          </div>
        </div>
      </div>
      <div className="star-charts">
        <div className="charts-area">
          <div className='charts-area-title'>传播指数</div>
          <div className="filter-options">
            <div className="filter-options-item">
              <Select defaultValue="baidu" style={{ width: 120 }} onChange={handleChange}>
                <Option value="baidu">百度指数</Option>
                <Option value="weibo">微博指数</Option>
                <Option value="wechat">微信指数</Option>
                <Option value="shemei">社媒指数</Option>
              </Select>
              <Radio.Group onChange={onChange} defaultValue="90">
                <Radio.Button value="90">90天</Radio.Button>
                <Radio.Button value="30">30天</Radio.Button>
                <Radio.Button value="7">7天</Radio.Button>
                <Radio.Button value="24">24小时</Radio.Button>
              </Radio.Group>
            </div>
            <Area {...configArea} />
          </div>
        </div>
        <div className="charts-radar">
          <div style={{marginBottom:20}} className='charts-area-title'>口碑指数</div>
          <div style={{padding:"0 20px"}}>
            <Radar {...configRadar} />
          </div>
        </div>
      </div>
      <div className="star-potential">
        <div style={{marginBottom:20}} className='charts-area-title'>潜力指数</div>
        <div className="potential-wrap">
          <div className="potential-left">
            <div className="potential-line">
              <p>待播影视剧</p>
              <span className="potential-number">4320</span>
              <span className="potential-text">同比</span>
              <i className="potential-icon"></i>
              <CaretUpOutlined style={{color:'#2FC25B'}} />
              <span className="potential-num">12%</span>
            </div>
            <div className="potential-line" style={{borderBottom:'none',marginTop:20}}>
              <p>待播综艺</p>
              <span className="potential-number">4320</span>
              <span className="potential-text">周环比</span>
              <i className="potential-icon"></i>
              <CaretDownOutlined style={{color:'#F04864'}}/>
              <span className="potential-num">10%</span>
            </div>
          </div>
          <div className="potential-table">
            <p>信息详情</p>
            <Table bordered style={{marginTop:50}} dataSource={list} pagination={false} columns={columns} />
          </div>

        </div>
      </div>
      
    </div>
  )
}
// export default StarInfo;
export default connect(({preservation}:{preservation:any}) => ({
  data: preservation
}))(StarInfo);

