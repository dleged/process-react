import React,{Component,Fragment} from 'react';
import './index.less';
import Log from './log.js';
import {Link} from 'react-router-dom';

class SubMenu extends Component{
	constructor(props){
		super(props);
		this.classList = {
			open: 'ant-menu-submenu-open',
			active: 'ant-menu-submenu-active'
		}
	}
	selectItem = (e) =>{
		let open = this.classList.open;
		if(e.currentTarget.classList.contains(open)){
			e.currentTarget.classList.remove(open);
		}else{
			e.currentTarget.classList.add(open);
		}
	}
	mouseover = (e) =>{
		e.currentTarget.classList.add(this.classList.active);
	}
	mouseout = (e) =>{
		e.currentTarget.classList.remove(this.classList.active);
	}
	render(){
		let data = this.props.data;
		return(
			<Fragment>
				{
					data.map((item,i) => (
						<li onMouseOut={this.mouseout} onMouseOver={this.mouseover} onClick={this.selectItem} key={i} className="ant-menu-submenu ant-menu-submenu-inline">
							<div className="ant-menu-submenu-title">
								<span>
									<i className={`anticon anticon-${item.icon}`}></i>
									<span>{item.name}</span>
								</span>
								<i className="ant-menu-submenu-arrow"></i>
							</div>
							<ItemMenu data={item.children} sub-path={`${item.path}`} />
						</li>
					))
				}
			</Fragment>
		)
	}
}

class ItemMenu extends Component{
	constructor(props){
		super(props);
		this.classList = {
			select: 'ant-menu-item-selected'
		}
	}
	selectItem = (e) =>{
		let select = this.classList.select;
		e.stopPropagation();
		if(e.currentTarget.classList.contains(select)){
			return;
		}else{
			document.querySelector(`.${select}`) && document.querySelector(`.${select}`).classList.remove(select)
			e.currentTarget.classList.contains(select) || e.currentTarget.classList.add(select);
		}
	}
	render(){
		let data = this.props.data;
		let subPath = this.props['sub-path'];
		return(
			<ul className="ant-menu-submenu ant-menu-submenu-inline ant-menu-hidden">
				{
					data.map((item,i) => (
						<li key={i} onClick={this.selectItem} className="ant-menu-item">
							<Link to={`/${subPath}/${item.path}`}><span>{item.name}</span></Link>
						</li>
					))
				}
			</ul>
		)
	}
}

class SliderMenu extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="ant-layout-has-sider" >
				<Log name="全流程业务运营管理平台" />
				<ul class="ant-menu ant-menu-dark ant-menu-root ant-menu-inline" role="menu" tabIndex="0">
					<SubMenu data={this.props.data} />
				</ul>
			</div>
		)
	}
}

export default SliderMenu;
