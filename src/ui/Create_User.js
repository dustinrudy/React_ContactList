import React from 'react';
import { Link, hashHistory} from 'react-router';
import { createContact } from 'API/contacts'
import Icons from 'font-awesome/css/font-awesome.css'

const CreateUser = React.createClass({
	getInitialState: function (){
		return {
			"fname": "",
			"lname": "",
      		"email": "",
      		"phone": "",
      		"location": "",
      		"large": "",
      		"medium": "",
      		"thumbnail": ""
		}
	},
	update: function (e) {
		var newState = this.state;

		newState[e.target.name] = e.target.value;

		this.setState(newState)
		console.log(newState)
	},
	createUser: function (e) {
		e.preventDefault()

		var obj = {
			"fname": this.state.fname,
			"lname": this.state.lname,
      		"email": this.state.email,
      		"phone": this.state.phone,
      		"location": this.state.location,
      		"large": this.state.large,
	      	"medium": this.state.medium,
	      	"thumbnail": this.state.thumbnail
	    }
		
		createContact(obj).then(function(){
			hashHistory.push('/');
		})
		


		
		
	},
	render: function() {
		return (
			<form onSubmit={this.createUser}>
				<label name="First Name">First Name</label><input onChange={this.update} type="text" name="fname" value={this.state.fname} placeholder="John"></input>
				<label name="Last Name">Last Name</label><input onChange={this.update} type="text" name="lname" value={this.state.lname} placeholder="Doe"></input>
				<label name="Email">Email</label><input onChange={this.update} type="email" name="email" value={this.state.email} placeholder="john.doe@gmail.com"></input>
				<label name="Phone">Phone</label><input onChange={this.update} type="tel" name="phone" value={this.state.phone} placeholder="702-233-9930"></input>
				<label name="City, State">Location</label><input onChange={this.update} type="text" name="location" value={this.state.location} placeholder="Henderson, NV"></input>
				<label name="Upload Profile Pic">Upload Profile Picture</label><input onChange={this.update} type="file" name="thumbnail" accept="images/*"></input>
				<button type="submit">Sumbit</button>
			</form>
		)
	}
})


export default CreateUser