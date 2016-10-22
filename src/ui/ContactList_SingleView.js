import React from 'react';
import { Link } from 'react-router';
import People from 'data/people.json';


export default React.createClass({
	getInitialState: function () {
		return {
			name:'',
			email:'',
			phone:'',
			location:''
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
			location: Person.location
		})
	},
	render: function(){
		return (
			<div id="container">
				<div id="users">
					<p className="name">{this.state.name}></p>
					<p className="email">{this.state.email}></p>
					<p className="phone">{this.state.phone}></p>
					<p className="location">{this.state.location}></p>
				</div>
			</div>	
		)
	}
})