import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import './app.css';
import Routes from './Routes/Routes';
import Layout from './Layout/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>  
  );
}

export default App;
