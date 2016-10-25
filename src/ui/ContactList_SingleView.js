import React from 'react';
import { Link, hashHistory } from 'react-router';
import { getContact } from 'API/contacts'
import Icons from 'font-awesome/css/font-awesome.css'


const ContactViewContainer = React.createClass({
	getInitialState: function () {
		return {
			fname:'',
			lname:'',
			email:'',
			phone:'',
			location:'',
			large: '',
		}
	},
	componentWillMount: function(){
		var id = this.props.params.id

		getContact(id).then(resp => {
			this.setState({
			fname: resp.data.fname,
			lname: resp.data.lname,
			email: resp.data.email,
			phone: resp.data.phone,
			location: resp.data.location,
			large: resp.data.large
		})
	})	
	},
	render: function(){
		return (
			<ContactView contact={this.state}/>
		)
	}
})

const ContactView = React.createClass({
	goBack: function() {
		hashHistory.goBack()
	},
	render: function(){
		return (
			<div className="container">
				<div className="header"><i onClick={this.goBack} className="fa fa-arrow-left" aria-hidden="true"></i><img className="profile" src={this.props.contact.large}/></div>
				<div id="user">
					<p className="text"><i className="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;{this.props.contact.fname} {this.props.contact.lname}</p>
					<p className="text"><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;{this.props.contact.email}</p>
					<p className="text"><i className="fa fa-mobile" aria-hidden="true"></i>&nbsp;&nbsp;{this.props.contact.phone}</p>
					<p className="text"><i className="fa fa-globe" aria-hidden="true"></i>&nbsp;&nbsp;{this.props.contact.location}</p>
				</div>
			</div>	
		)
	}
})

export default ContactViewContainer

