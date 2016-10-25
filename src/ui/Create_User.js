import React from 'react';
import { Link, hashHistory } from 'react-router';
import { createContact } from 'API/contacts'
import Icons from 'font-awesome/css/font-awesome.css'

const CreateUserContainer = React.createClass({
	getInitialState: function (){
		return {
			"name": "",
      		"email": "",
      		"phone": "",
      		"location": "",
      		"large": "",
      		"thumbnail": "",
      		"medium": ""
		}
	},
	render: function(){
		return (
			<CreateUser contact={this.state}/>
		)
	}
})

const CreateUser = React.createClass({
	render: function() {
		return (
			<form>
				<input type="text"></input>
				<input type="text"></input>
				<input type="email"></input>
				<input type="tel"></input>
				<input type="text"></input>
				<button>Sumbit</button>
			</form>
		)
	}
})


export default CreateUserContainer 