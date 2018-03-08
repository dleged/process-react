import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './lateralMenu.less';

class Header extends Component {
	constructor(props){
		super(props);
	}
	render(){
		const {data} = this.props;
		return(
			<ul className="latera-menu">
				{
					data.map((item,i) => {
						if(item.href){
							return <li key={i}><a href={item.href}>{item.name}</a></li>
						}else{
							return <li key={i}><Link to={item.path}>{item.name}</Link></li>
						}
					})
				}
			</ul>
		)
	}
}

export default Header;
