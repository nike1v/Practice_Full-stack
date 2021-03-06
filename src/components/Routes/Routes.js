import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

import {
  login,
  logout,
  books,
  contacts,
  cart,
  detail,
  modalCheckout,
} from '../../constants/routes';
import Books from '../Books/Books';
import Login from '../Login/Login';
import Contacts from '../Contacts/Contacts';
import Cart from '../Cart/Cart';
import Logout from '../Logout/Logout';
import Detail from '../Details/Details';
import ModalCheckout from '../ModalCheckout/ModalCheckout';

const Routes = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <Switch location={background || location}>
      <Redirect exact from="/" to={login} />
      <Route path={books} exact component={Books} />
      <Route path={login} exact component={Login} />
      <Route path={contacts} exact component={Contacts} />
      <Route path={cart} exact component={Cart} />
      <Route path={logout} exact component={Logout} />
      <Route path={detail} exact component={Detail} />
      {background && (
        <Route path={modalCheckout} exact>
          <ModalCheckout />
        </Route>
      )}
    </Switch>
  );
};

export default Routes;
