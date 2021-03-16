import React from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from "react-router-dom";
import Books from './Books/Books';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Redirect to="/login" />
        <Redirect to="/books" />
        
      </Layout>

      <Switch>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/login">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
