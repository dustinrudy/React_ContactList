import React from 'react';
import { Link } from 'react-router';
import People from 'data/people';

export default React.createClass({
	render: function() {
		return (
			<div id="container">
			<div id="title">My Peeps
				<div id="users">
					<img id="userpic" src="" />
					<li className="name">{this.people.name}</li>
				</div>
			</div>
		</div>	
		)
	}
})