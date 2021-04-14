import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleToastInState } from '../Books/actions';
import errorIcon from '../../images/error.svg';
import success from '../../images/success.svg';
import toastPropType from '../../propTypes/toastPropTypes';

import './toast.css';

const ErrorToast = ({ toast, toggleToastInState, type }) => {
  const { toastText } = toast;
  let icon = errorIcon;
  if (toast.type === 'success') {
    icon = success;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      deleteToast(toast);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const deleteToast = () => {
    toggleToastInState(toast);
  };

  return (
    <div className={`notificationContainer ${type}`}>
      <button
        type="button"
        className="notificationButton"
        onClick={deleteToast}>
        X
      </button>
      <div className="notificationControl">
        <img src={icon} alt="toast" />
      </div>
      <div className="notificationBlock">
        <p className="notificationTitle">
          {type ? 'Error message' : 'Success'}
        </p>
        <p className="notificationMessage">{toastText}</p>
      </div>
    </div>
  );
};

ErrorToast.propTypes = {
  toggleToastInState: PropTypes.func.isRequired,
  toast: toastPropType.isRequired,
  type: PropTypes.string.isRequired,
};

export default connect(null, { toggleToastInState })(ErrorToast);
