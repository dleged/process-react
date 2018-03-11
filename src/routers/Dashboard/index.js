import React,{Component,Fragment} from 'react';
import {
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  Table,
  Radio,
  DatePicker,
  Tooltip,
  Menu,
  Dropdown,
} from 'antd';
import Bar from '../../components/charts/bar';
import Pie from '../../components/charts/pie';

class Dashboard extends Component {
	constructor(props){
		super(props);
	}
	render(){
		const topColResponsiveProps = {
	      xs: 24,
	      sm: 12,
	      md: 12,
	      lg: 12,
	      xl: 12,
	      style: { marginBottom: 24 },
		};


		return(
			<Fragment>
				<Row gutter={24}>
					<Col {...topColResponsiveProps}>
						<Card title="重要网络资源流向">
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
					<Col {...topColResponsiveProps}>
						<Card title="出口利用率">
							<Pie height={295} data={ [{
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
			</Fragment>
		)
	}
}

export default Dashboard;
