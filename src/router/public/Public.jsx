import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// import { isLogin } from '../utils';
const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => <Component {...props} />} />
);

PublicRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

export default PublicRoute;
