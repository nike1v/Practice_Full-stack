import React from "react";
import PropTypes from "prop-types";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
