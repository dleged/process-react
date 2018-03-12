import React, { Component } from 'react';
import { Chart, Axis, Tooltip,Legend, Geom } from 'bizcharts';

class Bar extends Component {
	constructor(props){
		super(props)
	}
	render(){
		const {
			height,
			data,
			color
		} = this.props;
		console.log(data);
		// 数据源
		return (
			<Chart width={1600} padding={'auto'} height={height} data={data} forceFit>
				<Axis name="name" />
				<Axis name="value" />
	 	  		<Tooltip />
	      		<Geom color="name" type="interval" position="name*value" color={color} />
		    </Chart>
		)
	}
}

export default Bar;
