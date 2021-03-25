import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Routes from '../Routes/Routes';
import Layout from '../Layout/Layout';
import ErrorBoundary from '../Errors/error';
import Spinner from '../Spinner/Spinner';

import 'normalize.css';
import './app.css';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Layout>
          <Spinner />
          <Routes />
        </Layout>
      </ErrorBoundary>
    </Router>  
  );
}

export default App;