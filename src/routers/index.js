import React,{Component,Fragment} from 'react';
import {
	Dashboard
} from './routerTemp';

import {
    Switch,
    Route,
 } from 'react-router-dom';
class RouterTemp extends Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<Route exact path="/home/dashboard" component={Dashboard}/>
		)
	}
}

export default RouterTemp;
