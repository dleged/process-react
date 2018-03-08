import React,{Component} from 'react';

class Dashboard extends Component {
	constructor(props){
		super(props);
	}
	render(){
		const {name,data} = this.props;
		return(
			<div>我是content</div>
		)
	}
}

export default Dashboard;
