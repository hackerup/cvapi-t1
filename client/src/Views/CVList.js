import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getResumeList, getResumeDelete } from '../actions/userActions'
import Style from '../scss/resume_list.module.scss'
class CVList extends Component{

	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.getResumeList({});
	}

	delete = (id)=> {
		const params = {
			id
		}
		this.props.getResumeDelete(params);
	}

	render(){
		return(
			<div className={Style.container}>
				<div className={Style.header}>Resumes</div>
				<div className={Style.resumes}>
					<ul className={Style.list}>
							{this.props.getResumeListResponse.data && this.props.getResumeListResponse.data.data.map((resume, index)=>{
								return (
									<li className={Style.list_item}>
										<h1>Email: {resume.email}</h1>
										<div className={Style.actions}>
											<button onClick={()=> this.delete(resume._id)} className={[Style.delete, Style.btn].join(' ')}>Delete</button>
											<button className={[Style.edit, Style.btn].join(' ')}>Edit</button>
										</div>
									</li>
								)
							})}
					</ul>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getResumeList: params => dispatch(getResumeList(params)),
		getResumeDelete: params => dispatch(getResumeDelete(params))
	}
}

const mapStateToProps = state => {
	return {
		getResumeListResponse: state.getResumeListResponse,
		getResumeDeleteResponse: state.getResumeDeleteResponse
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CVList);