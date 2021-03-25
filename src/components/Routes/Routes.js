import React from 'react';
import { Route, Switch } from "react-router-dom";

import { login, logout, books, contacts, cart, detail } from '../../constatnts/routes.js';
import Books from '../Books/Books';
import Login from '../Login/Login';
import Contacts from '../Contacts/Contacts';
import Cart from '../Cart/Cart';
import Logout from '../Logout/Logout';
import Detail from '../BookItem/Detail.js';

const Routes = () => {
  return (
      <Switch>
        <Route path={books} exact component={Books} />
        <Route path={login} exact component={Login} />
        <Route path={contacts} exact component={Contacts} />
        <Route path={cart} exact component={Cart} />
        <Route path={logout} exact component={Logout} />
        <Route path={detail} exact component={Detail} />
      </Switch>
  )
}

export default Routes;