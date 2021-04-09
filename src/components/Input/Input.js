import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

const Input = ({ label, type, userValue, setUserState }) => {
  const handleChange = ({ target }) => {
    setUserState(target.value);
  };
  return (
    <label className="formLabel">
      {label}
      <input
        type={type}
        className="formInput"
        value={userValue}
        onChange={handleChange}
        required
      />
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  userValue: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
  setUserState: PropTypes.func.isRequired,
};

export default Input;
