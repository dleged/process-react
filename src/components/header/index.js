import React,{Component} from 'react';
import LateralMenu from './lateralMenu';
import './index.less';

class Header extends Component {
	constructor(props){
		super(props);
	}
	render(){
		const {name,data} = this.props;
		return(
			<div className="ant-layout-header" style={{padding: '0px'}}>
				<i class="anticon anticon-menu-fold trigger"></i>
				<LateralMenu data={data}/>
				<div className="ant-select-show-search ant-select-auto-complete ant-select ant-select-combobox">
					<i class="anticon anticon-search"></i>
					<input type="text" placeholder="站内搜索" value="" class="ant-input ant-select-search__field"/>
				</div>

			</div>
		)
	}
}

export default Header;
