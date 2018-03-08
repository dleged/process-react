import PropTypes from 'prop-types';
import React,{Component} from 'react';
import menuData from '../common/menuData';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import SliderMenu from '../components/sliderMenu';
import {
    BrowserRouter as Router,
    Route,
 } from 'react-router-dom';
import './layout.less';


class BasicLayout extends Component {
	getChildContext() {
		const { location, routerData } = this.props;
		return {
		  location,
		  breadcrumbNameMap: routerData,
		};
	}
	getPageTitle = () => {
	    // const { routerData, location } = this.props;
	    // const { pathname } = location;
	    // let title = 'Ant Design Pro';
	    // if (routerData[pathname] && routerData[pathname].name) {
	    //   title = `${routerData[pathname].name} - Ant Design Pro`;
	    // }
	    return 'title';
  	}
	// componentDidMount() {
	// 	enquireScreen((mobile) => {
	// 	  this.setState({
	// 	    isMobile: mobile,
	// 	  });
	// })
	render(){
		let layout = (
			<div class="ant-layout">
				<Router>
					<div className="left-layout">
						<SliderMenu className="" data={menuData} />
					</div>
				</Router>
			</div>
		)
		return (
			<DocumentTitle title={this.getPageTitle()}>
				{layout}
			</DocumentTitle>
		)
	}
}

export default BasicLayout;
