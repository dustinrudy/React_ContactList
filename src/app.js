import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

require('assets/styles/style.css')

// Layouts
import App from 'layouts/app';

// UI
import ContactList_View from 'ui/ContactList_ListView';
import ContactList_SingleView from 'ui/ContactList_SingleView';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={App}>
      <Route path="/" component={ContactList_View} />
      <Route path="/contact/:id" component={ContactList_SingleView} />
    </Route>
  </Router>
), document.getElementById('app'));