import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import MainLayout from '../../Layouts/main';

const PrivateRoute = ({ component: Component, ...rest }) => {
  // TODO
  const isLogin = localStorage.getItem('loggedIn');
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? (
          <MainLayout>
            <Component {...props} />
          </MainLayout>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

export default PrivateRoute;
