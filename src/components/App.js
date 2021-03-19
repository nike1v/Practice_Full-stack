import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import Books from './Books/Books';
import Layout from './Layout/Layout';
import Login from './Login/Login';
import Contacts from './Contacts/Contacts';
import Cart from './Cart/Cart';
import Logout from './Logout/Logout';
import './app.css';
import { login, logout, books, contacts, cart } from '../constatnts/routes.js';

const App = () => {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route path={books} component={Books} />
        <Route path={login} component={Login} />
        <Route path={contacts} component={Contacts} />
        <Route path={cart} component={Cart} />
        <Route path={logout} component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;
