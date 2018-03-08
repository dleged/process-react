import React,{Component} from 'react';
import './log.less';

class Log extends Component{
	render (){
		return (
			<div className="logo">
				<h1>{this.props.name}</h1>
			</div>
		)
	}
}

export default Log;
