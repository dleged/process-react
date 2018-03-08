import PropTypes from 'prop-types';
import React,{Component} from 'react';
import {sliderData,headerData} from '../common/menuData';
import DocumentTitle from 'react-document-title';
import SliderMenu from '../components/sliderMenu';
import Header from '../components/header';
import RouterTemp from '../routers'
import {
    BrowserRouter as Router,
    Route,
 } from 'react-router-dom';
import './layout.less';

console.log(RouterTemp);
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
			<Router path="/">
				<div class="ant-layout ant-layout-has-sider">
						<div className="left-layout">
							<SliderMenu className="" data={sliderData} />
						</div>
						<div className="ant-layout">
							<Header name="全流程业务运营管理平台" data={headerData} />
							<div className="ant-layout-content" style={{margin: "24px 24px 0px", height: "100%"}}>
								<RouterTemp />
							</div>
						</div>
				</div>
			</Router>
		)
		return (
			<DocumentTitle title={this.getPageTitle()}>
				{layout}
			</DocumentTitle>
		)
	}
}

export default BasicLayout;
