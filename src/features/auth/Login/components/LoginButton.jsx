import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import text from '../labels';

class Login extends Component {
  handleLogin = () => {
    localStorage.setItem('loggedIn', true);
    const { history } = this.props;
    history.push({ pathname: '/form' });
  };

  render() {
    return (
      <div className="login">
        <Button variant="dark" onClick={this.handleLogin}>
          {text.LOGIN_MSG}
        </Button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

// Login.defaultProps = {
//   push: undefined,
// };

const LoginButton = withRouter(Login);
export default LoginButton;
