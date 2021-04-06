import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './spinner.css';

const Spinner = ({ isLoading }) => isLoading && <div className="loader" />;

Spinner.propTypes = {
  isLoading: PropTypes.bool,
};

Spinner.defaultProps = {
  isLoading: false,
};

const mapStateToProps = ({ loaderStore }) => ({
  isLoading: loaderStore.isLoading,
});

export default connect(mapStateToProps)(Spinner);
