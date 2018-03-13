import React from 'react'
import PropTypes from 'prop-types'
import './index.less'
class Rank extends React.Component {
	render () {
		const {
			style = {},
			rankTitle = '',
			labelTitle = [],
			rankIndex = true,//是否显示排名：boolean
			rankSource = [],
			extra = '',
		} = this.props;
		let width = `${(90/labelTitle.length).toFixed(1)}%`;
		return(
			<div className="rank-list-box" style={{style}}>
					{ rankTitle && <h4>title</h4>}
					<h4 className="rank-label">
						{
							labelTitle.map((item,i)=>{
								return <span style={{'width': width}}>{item}</span>;
							})
						}
					</h4>
					<ul>
						{
							rankSource.map((item,index) => {
								index++;
								extra && item.pop();
								return (
									<li className='rank-list'>
										{ rankIndex && <span className={ `rank-icon rank-${index}` }>{index}</span> }
										<ListSpan data={item} width={width}/>
										{extra && <span>{extra}</span>}
									</li>
								);
							})
						}
					</ul>
			</div>
		)
	}
}

class ListSpan extends React.Component {
	constructor(props) {
		super(props)
	}
	render(){
		let {data,width} = this.props;
		return(
			data.map((item,index)=>{
				return <span style={{'width': width}}>{item}</span>
			})
		)
	}
}

export default Rank;
