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
	createContact: function(){

	},
	render: function() {
		return (
			<form>
				<label name="First Name"><input type="text" name="fname" placeholder="John"></input></label>
				<label name="Last Name"><input type="text" name="lname" placeholder="Doe"></input></label>
				<label name="Email"><input type="email" name="email" placeholder="john.doe@gmail.com"></input></label>
				<label name="Phone"><input type="tel" name="phone" placeholder="702-233-9930"></input></label>
				<label name="City, State"><input type="text" name="location" placeholder="Henderson, NV"></input></label>
				<input type="file" name="thumbnail" accept="images/*"></input>
				<button className="submitbutton" formMethod="post" formAction="http://localhost:8001/contacts/" type="submit">Sumbit</button>
			</form>
		)
	}
})


export default CreateUserContainer 