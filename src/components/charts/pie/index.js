import React, { Component } from 'react';
import { Chart, Axis, Tooltip,tooltip,Legend, Geom,Coord } from 'bizcharts';

class Pie extends Component {
	constructor(props){
		super(props)
	}
	render(){
		let {
			height,
			data,
			color,
			value = 0
		} = this.props;
		const defaultColors = color;


		// 数据源
		return (
			<Chart height={height} data={data} padding={[ 0, 110, 20, 0]} forceFit>
			   <Coord type='polar' innerRadius={0.1} />
			   <Tooltip />
			   <Legend
				 position= 'right'
				 offsetX={-40}
				 offsetY={-40} />
			   <Geom
			     tooltip={['name*value',(name, value) => {
					value = value/10 + '%';
					return {
					  name: name,
					  value: value
					};
				 }]}
			  	 offsetX={-60}
				 position="name*value"
				 color="name"
				 style={{ lineWidth: 1, stroke: '#fff' }}
				 type="intervalStack"
				 >
			   </Geom>
			 </Chart>
		)
	}
}

export default Pie;
