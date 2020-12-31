import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ConditionalRoute = (...rest) => {
  // TODO
  const isLogin = localStorage.getItem('loggedIn');
  return (
    <Route
      {...rest}
      render={() =>
        isLogin ? <Redirect to="/form" /> : <Redirect to="/login" />
      }
    />
  );
};

export default ConditionalRoute;
