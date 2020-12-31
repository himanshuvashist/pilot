import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router';

class Layout extends React.PureComponent {
  handleLogout = () => {
    const { history } = this.props;
    localStorage.clear();
    history.push('/');
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <div className="logout">
          <Button variant="dark" onClick={this.handleLogout}>
            Logout
          </Button>
          {children}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
  history: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const MainLayout = withRouter(Layout);

export default MainLayout;
