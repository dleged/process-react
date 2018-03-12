import React, { Component,Fragment } from 'react';
import { Chart, Axis, Tooltip,tooltip,Legend,Label, Geom,Coord } from 'bizcharts';
import PropTypes from 'prop-types';
import './index.less';
import { DataView } from '@antv/data-set';

class Pie extends Component {
	constructor(props){
		super(props)
	}
	render(){
		let {
			height,
			data,
			color,
			title,
			style = null,
			innerRadius = 0.1,
			legend = true,
			label = false,
			showTitle = false,
			padding = 'auto',
			value = 0
		} = this.props;
		const defaultColors = color;

		const dv = new DataView();
    dv.source(data).transform({
    type: 'percent',
    field: 'value',
    dimension: 'name',
    as: 'percent'
    });
    const cols = {
    percent: {
      formatter: val => {
        val = (val * 100).toFixed(1) + '%';
        return val;
      }
    }
    }
		// 数据源
		return (
		<Fragment>
			<Chart height={height} data={dv} scale={cols} padding={padding} style={style} forceFit>
				<Coord type={'theta'} radius={0.75} innerRadius={innerRadius} />
			   <Tooltip showTitle={showTitle}  />
			   {legend && <Legend
					 useHtml={true}
					 position= 'right'
					 offsetX={-40}
					 offsetY={-20}
					 itemTpl={
              (value, color, checked, index) => {
                const obj = dv.rows[index];
                checked = checked ? 'checked' : 'unChecked';
                return '<tr class="g2-legend-list-item item-' + index + ' ' + checked +
                  '" data-value="' + value + '" data-color=' + color +
                  ' style="cursor: pointer;font-size: 14px;">' +
                  '<td width=150 style="border: none;padding:0;"><i class="g2-legend-marker" style="width:10px;height:10px;display:inline-block;margin-right:10px;background-color:' + color + ';"></i>' +
                  '<span class="g2-legend-text">' + value + '</span></td>' +
                  '<td style="text-align: right;border: none;padding:0;">' + (obj.percent*100).toFixed(1) + '%'; + '</td>' +
                  '</tr>';
              }
            } />
				 }
			   <Geom
				 position="percent"
				 color="name"
				 style={{ lineWidth: 1, stroke: '#fff' }}
				 type="intervalStack"
				 >
				 {label && <Label content='percent' formatter={(val, item) => {
							 return `  ${item.point.name}:${val}  `;}} /> }
			   </Geom>
			 </Chart>
			 { title && <h4 style={{ fontWeight: 400,textAlign:'center' }}>{title}</h4>}
		</Fragment>
		)
	}
}

export default Pie;
