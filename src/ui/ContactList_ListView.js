import React from 'react';
import { Link } from 'react-router';
import People from 'data/people.json';

export default React.createClass({
	render: function() {
		return (
			<div id="container">
			<div id="title">My Peeps
				<div id="users">
					<ul>
						{People.people.map(function(person){
							return <li key={person.id} className="name"><Link to={"/contact/" + person.id}><img className="thumbnail" src={person.thumbnail}/><div className="name__container"><p className="names">{person.name}</p></div></Link></li>
						})}
					</ul>
				</div>
			</div>
		</div>	
		)
	}
})