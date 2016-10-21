import React from 'react';
import { Link } from 'react-router';
import People from 'data/people';


export default React.createClass({
	render: function(){
		return (
			<div id="container">
				{People.map(function(person){
					`<div id="users">
						<p className="name"${this.people.name}></p>
						<p className="email"${this.people.email}></p>
						<p className="phone"${this.people.phone}></p>
						<p className="location"${this.people.location}></p>
					</div>`
				})}
			</div>	
		)
	}
})