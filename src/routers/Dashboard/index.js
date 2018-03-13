import React,{Component,Fragment} from 'react';
import {
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  Table,
  Radio,
  Button,
  Input,
  DatePicker,
  Tooltip,
  Select
} from 'antd';
import Bar from '../../components/charts/bar';
import Pie from '../../components/charts/pie';
import Rank from '../../components/rank';

let Option = Select.Option;

class Dashboard extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const topColResponsiveProps_12 = {
      xs: 24,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12,
      style: { marginBottom: 24 },
    };

    const topColResponsiveProps_8 = {
      xs: 24,
      sm: 8,
      md: 8,
      lg: 8,
      xl: 8,
      style: { marginBottom: 24 },
    };

    const topColResponsiveProps_16 = {
      xs: 24,
      sm: 16,
      md: 16,
      lg: 16,
      xl: 16,
      style: { marginBottom: 24 },
    };

    const topColResponsiveProps_sm_8 = {
      xs: 8,
      style: { height: '50%' }
    };

    //各通道流量占比
    const eachChannelProps = {
      title: ['外省移动','云链路','互联互通','第三方','互联互通','IDC'],
      height: 100,
      legend: false,
      data: [{
        name: '视频',
        value:  120
      },{
        name: '文字',
        value:  130
      },{
        name: '图片',
        value:  186
      },{
        name: '应用',
        value:  129
      },{
        name: '其它',
        value:  110
      }]
    }

    //通道流量已使用情况
    const channelCapacityProps =   {
      title: ['CDN','IDC','外省移动','云链路','第三方','CDN'],
      innerRadius: 0.6,
      style: {left: '-20px',position:"relative"},
      padding: [0,80,0,0],
      height: 100,
      data: [{
        name: '未使用',
        value:  120
      },{
        name: '已使用',
        value:  310
      }]
    }

    //重要资源下拉框
    class SourceSelect extends Component {
      constructor(props) {
        super(props);
      }
      render(){
        return (
          <Select size="small" defaultValue={"优酷"} onSelect={(val) => (console.dir(val))} style={ {'width': 100} }>
            <Option value="优酷">优酷</Option>
            <Option value="爱奇艺">爱奇艺</Option>
            <Option value="腾讯">腾讯</Option>
            <Option value="网易">网易</Option>
            <Option value="更多">更多</Option>
          </Select>
        );
      }
    }

    //热门应用质量评分
    class HotApplication extends Component {
      constructor(props) {
        super(props);
      }
      render() {
        return (
          <Select size="small" defaultValue={"CDN"} onSelect={(val) => (console.dir(val))} style={ {'width': 100} }>
            <Option value="CDN">CDN</Option>
            <Option value="IDC">IDC</Option>
            <Option value="云链路">外省移动</Option>
            <Option value="互联互通">互联互通</Option>
          </Select>
        );
      }
    }
    let hotApplicationRank = {
        labelTitle: ['域名','评分'],
        rankSource: [[
          '百度','99'
        ],[
          '酷优','96'
        ],[
          '爱奇艺','93'
        ],[
          '腾讯','91'
        ],[
          '网易','88'
        ],[
          '新浪','88'
        ]
      ]
    }

    //策略生成评分
    let tacticsApplicationRank = {
        labelTitle: ['域名','评分','调度建议'],
        rankSource: [[
          '百度','99',''
        ],[
          '酷优','96',''
        ],[
          '爱奇艺','93',''
        ],[
          '腾讯','91',''
        ],[
          '网易','88',''
        ],[
          '新浪','88',''
        ]
      ]
    }

    //策略生成-调度建议个数
    class AdviseInput extends Component{
      constructor(props) {
        super(props)
      }
      render(){
        return(
          <Fragment>
              <span>调度建议个数:</span>
              <Input size="small" style={{'margin-left': '10px','width': '50px','display': 'inline-block'}} />
          </Fragment>
        )
      }
    }


    return(
      <Fragment>
        <Row gutter={24}>
          <Col {...topColResponsiveProps_12}>
            <Card title="重要网络资源流向" bordered={false} extra={<SourceSelect/>}>
              <Bar height={295} color={'rgba(24, 144, 255, 0.85)'} data={ [{
                  name: '外省移动',
                  value:  100
                },{
                  name: '互联互通',
                  value:  200
                },{
                  name: '云链路',
                  value:  300
                },{
                  name: '第三方',
                  value:  400
                },{
                  name: 'IDC',
                  value:  500
                },{
                  name: 'CDN',
                  value:  500
                },{
                  name: '本网率',
                  value:  500
                },{
                  name: '本省率',
                  value:  500
                }] } />
              </Card>
            </Col>
            <Col {...topColResponsiveProps_12}>
              <Card title="出口利用率">
                <Pie height={'295'} legend={false} label={true} data={ [{
                    name: '外省移动',
                    value:  120
                  },{
                    name: '互联互通',
                    value:  130
                  },{
                    name: '云链路',
                    value:  186
                  },{
                    name: '第三方',
                    value:  129
                  },{
                    name: 'IDC',
                    value:  110
                  },{
                    name: 'CDN',
                    value:  170
                  },{
                    name: '本网率',
                    value:  134
                  },{
                    name: '本省率',
                    value:  110
                  }] } />
                </Card>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col {...topColResponsiveProps_8}>
                <Card title="各通道流量占比">
                  {
                    eachChannelProps.title.map((item,index) => (
                      <Col {...topColResponsiveProps_sm_8}>
                        <Pie {...eachChannelProps} title={item} />
                      </Col>
                    ))
                  }
                </Card>
              </Col>
              <Col {...topColResponsiveProps_16}>
                <Card title="管道带宽使用情况">
                  {
                    channelCapacityProps.title.map((item,index) => (
                      <Col {...topColResponsiveProps_sm_8}>
                        <Pie {...channelCapacityProps} title={item} />
                      </Col>
                    ))
                  }
                </Card>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col {...topColResponsiveProps_8}>
                <Card title="管道评分">

                </Card>
              </Col>
              <Col {...topColResponsiveProps_8}>
                <Card title="热门应用质量评分" extra={<HotApplication />}>
                  <Rank  {...hotApplicationRank}/>
                </Card>
              </Col>
              <Col {...topColResponsiveProps_8}>
                <Card title="策略生成" extra={<AdviseInput/>}>
                  <Rank rankIndex={false} {...tacticsApplicationRank} extra={<Button size="small">详情</Button>}/>
                </Card>
              </Col>
            </Row>
          </Fragment>
        )
      }
    }

    export default Dashboard;
