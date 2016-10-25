import React from 'react';
import { Link } from 'react-router';
import { getContacts, deleteContact } from 'API/contacts'

const ContactListContainer = React.createClass({
	getInitialState: function (){
		return {
			contacts: [],
		}
	},

	componentWillMount: function() {
		this.rerender()
	},
	rerender: function(){
		getContacts().then(resp => {
			this.setState({
				contacts: resp.data
			})
		})
	},
	render: function() {
		return (
			<ContactList rerender={this.rerender} contacts={this.state.contacts} />
		)
	}
})

const ContactList = React.createClass({
	deleteContact: function(e){
		var id = e.target.substr(1)
		deleteContact(id).then(resp => {
		this.props.rerender()
		})
	},
	render: function() {
		return (
			<div id="container">
			<div id="title">My Peeps
				<div id="users">
					<ul>
						{this.props.contacts.map(person => {
							return <li key={person.id} className="name"><Link to={"/contact/" + person.id}><img className="thumbnail" src={person.thumbnail}/><div className="name__container"><p className="names">{person.fname} {person.lname}</p></div></Link><button id={`d${person.id}`} onClick={this.deleteContact}>DELETE</button></li>
						})}
					</ul>
				</div>
			</div>
			<div><Link to="/createuser/"><button className="newuser">Create New User</button></Link></div>
		</div>	
		)
	}
})

export default ContactListContainer