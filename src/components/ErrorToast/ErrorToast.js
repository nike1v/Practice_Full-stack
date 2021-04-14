import React from 'react';
import { connect } from 'react-redux';

import './errorToast.css';

const ErrorToast = () => {
  const errorHandler = () => {};

  return (
    <div className="notificationContainer">
      <button type="button" onClick={errorHandler}>
        x
      </button>
      <div className="notificationBlock">
        <p className="notificationTitle">Title</p>
        <p className="notificationMessage">Message</p>
      </div>
    </div>
  );
};

export default connect(null, null)(ErrorToast);
