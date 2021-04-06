import React,{useEffect,useState} from 'react'
import Headers from '@/components/header';
import './style.less'
import { Area,Radar } from '@ant-design/charts';
import { DataSet } from '@antv/data-set';
import { Breadcrumb, Select, Radio } from 'antd';
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
  useEffect(() => {
    asyncFetch();
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
        console.log(datum);
        
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
  return(
    <div className="star-info">
      <Headers></Headers>
      <div className="star-deails">
        <div className="star-deails-wrap">
        <Breadcrumb>
          <Breadcrumb.Item>明星榜单</Breadcrumb.Item>
          <Breadcrumb.Item>蔡徐坤</Breadcrumb.Item>
        </Breadcrumb>
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
    </div>
  )
}
export default StarInfo;

