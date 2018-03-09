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
		let formatColor;
		const tooltipFormat = [
	      'x*value',
	      (x, p) => ({
	        name: x,
	        value: `${(p * 100).toFixed(2)}%`,
	      }),
	    ];
	    const scale = {
	      x: {
	        type: 'cat',
	        range: [0, 1],
	      },
	      y: {
	        min: 0,
	      },
	    };

	    if (value) {
	      formatColor = (value) => {
	        if (value === '占比') {
	          return color || 'rgba(24, 144, 255, 0.85)';
	        } else {
	          return '#F0F2F5';
	        }
	      };
	      data = [
	        {
	          x: '占比',
	          y: parseFloat(value),
	        },
	        {
	          x: '反比',
	          y: 100 - parseFloat(value),
	        },
	      ];
	    }
		// 数据源
		return (
			<Chart height={height} data={data} forceFit>
			   <Coord type='polar' innerRadius={0.2} />
			   <Tooltip />
			   <Legend
				 position= 'right'
				 offsetX={-1160} />
			   <Geom
			     tooltip={tooltip && tooltipFormat}
				 position="name*value"
				 color={['x', 'value ? formatColor : defaultColors']}
				 style={{ lineWidth: 1, stroke: '#fff' }}
				 type="interval"
				 position="name*value"
				 >
			   </Geom>
			 </Chart>
		)
	}
}

export default Pie;
