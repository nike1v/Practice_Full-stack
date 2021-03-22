import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './app.css';
import Routes from './Routes/Routes';
import Layout from './Layout/Layout';
import ErrorBoundary from './Errors/error';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
      <Layout>
        <Routes />
      </Layout>
      </ErrorBoundary>
    </Router>  
  );
}

export default App;
