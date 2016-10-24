import React from 'react';
import { Link } from 'react-router';
import People from 'data/people.json';
import Icons from 'font-awesome/css/font-awesome.css'


export default React.createClass({
	getInitialState: function () {
		return {
			name:'',
			email:'',
			phone:'',
			location:'',
			large: '',
		}
	},
	componentWillMount: function(){
		var id = this.props.params.id

		var Person = People.people.filter(function(person){
			return person.id == id
		})[0]

		this.setState({
			name:Person.name,
			email: Person.email,
			phone: Person.phone,
			location: Person.location,
			large: Person.large
		})
	},
	render: function(){
		return (
			<div id="container2">
				<div className="header"><img className="profile" src={this.state.large}/></div>
				<div id="user">
					<p className="text"><i className="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;{this.state.name}</p>
					<p className="text"><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;{this.state.email}</p>
					<p className="text"><i className="fa fa-mobile" aria-hidden="true"></i>&nbsp;&nbsp;{this.state.phone}</p>
					<p className="text"><i className="fa fa-globe" aria-hidden="true"></i>&nbsp;&nbsp;{this.state.location}</p>
				</div>
			</div>	
		)
	}
})