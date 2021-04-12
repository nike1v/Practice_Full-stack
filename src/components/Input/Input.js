import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

const Input = ({ label, type, value, onChange }) => {
  const handleChange = ({ target }) => {
    onChange(target.value);
  };
  return (
    <label className="formLabel">
      {label}
      <input
        type={type}
        className="formInput"
        value={value}
        onChange={handleChange}
        required
      />
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
