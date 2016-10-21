import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

require('assets/styles/style.css')

// Layouts
import App from 'layouts/app';
import ContactList_View from 'layouts/ContactList_ListView';
import ContactList_SingleView from 'layouts/ContactList_SingleView';
// Data 
import People from 'data/people';
ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={App}>
      
    </Route>
  </Router>
), document.getElementById('App'));