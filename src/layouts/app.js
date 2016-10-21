import React from 'react';
import { Link } from 'react-router';
import ContactList_View from 'ContactList_ListView'

export default React.createClass({
  render: function() {
    return (
      <div className="app">
        <nav>
        </nav>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
});