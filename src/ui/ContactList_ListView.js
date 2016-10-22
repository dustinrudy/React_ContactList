import React from 'react';
import { Link } from 'react-router';
import People from 'data/people.json';

export default React.createClass({
	render: function() {
		return (
			<div id="container">
			<div id="title">My Peeps
				<div id="users">
					<i className="fa fa-user" aria-hidden="true"></i>
					<ul>
						{People.people.map(function(person){
							return <li key={person.id} className="name"><Link to={"/contact/" + person.id}>{person.name}</Link></li>
						})}
					</ul>
				</div>
			</div>
		</div>	
		)
	}
})