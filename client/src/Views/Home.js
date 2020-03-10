import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserCount } from '../actions/userActions'
import Style from '../scss/home.module.scss';

class Home extends Component{
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.getUserCount({})
	}

	componentWillReceiveProps(nextProps, nextContext){
		console.log(nextProps)
	}

	render(){
		return(
			<div className={Style.container}>
				<div className={Style.header}>Users List</div>
				<div className={Style.users}>
					<ul className={Style.list}>
						{this.props.getUserCountResponse.data && this.props.getUserCountResponse.data.data.map((user, index)=>{
							return <li key={index} className={Style.list_item}>
									<div className={Style.userImage}>
										<img src={user.thumbnail} />
									</div>
									<div className={Style.userinfo}>
										<p className={Style.text}>
											Name: {user.username}
										</p>
										<p className={Style.text}>
											Email: {user.email}
										</p>
										<p className={Style.text}>
											Status: {user.status}
										</p>
									</div>
								</li>;
						})}
					</ul>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state =>{

	return {
		getUserCountResponse: state.getUserCountResponse
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		getUserCount: params => dispatch(getUserCount(params))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);