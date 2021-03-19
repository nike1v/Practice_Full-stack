import React from 'react';
import {Route, Switch} from "react-router-dom";
import { login, logout, books, contacts, cart } from '../../constatnts/routes.js';
import Books from '../Books/Books';
import Login from '../Login/Login';
import Contacts from '../Contacts/Contacts';
import Cart from '../Cart/Cart';
import Logout from '../Logout/Logout';

const Routes = () => {
  return (
      <Switch>
        <Route path={books} component={Books} />
        <Route path={login} component={Login} />
        <Route path={contacts} component={Contacts} />
        <Route path={cart} component={Cart} />
        <Route path={logout} component={Logout} />
      </Switch>
  )
}

export default Routes;