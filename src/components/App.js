import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './app.css';
import Routes from './Routes/Routes';
import Layout from './Layout/Layout';
import ErrorBoundary from './Errors/error';
import 'normalize.css';
import Spinner from './Spinner/Spinner';

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