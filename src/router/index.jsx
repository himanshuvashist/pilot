import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import FormContainer from '../features/form/container/FormContainer';
import LoginContainer from '../features/auth/Login/container/LoginContainer';
import PublicRoute from './public/Public';
import PrivateRoute from './private/Private';
import ConditionalRoute from './conditional/Conditional';
import FormTwoStageOne from '../features/formTwoStageOne/container/FormContainer';
import FormTwoStageTwo from '../features/formTwoStageTwo/container/FormContainer';
import FormTwoStageThree from '../features/formTwoStageThree/container/FormContainer';

const Index = (props) => {
  const [activeStep, setStep] = useState(1);
  const moveStep = () => {
    const temp = activeStep;
    setStep(activeStep + 1);
    temp === 1
      ? props.history.push('/form2/two')
      : props.history.push('/form2/three');
  };

  return (
    <div>
      <Switch>
        <ConditionalRoute path={'/'} exact />
        <PublicRoute component={LoginContainer} path={`/login`} exact />
        <PrivateRoute component={FormContainer} path={'/form'} exact />
        <PrivateRoute
          component={() => (
            <FormTwoStageOne activeStep={activeStep} moveStep={moveStep} />
          )}
          path={'/form2/one'}
          exact
        />
        <PrivateRoute
          component={() => (
            <FormTwoStageTwo activeStep={activeStep} moveStep={moveStep} />
          )}
          path={'/form2/two'}
          exact
        />
        <PrivateRoute
          component={() => <FormTwoStageThree activeStep={activeStep} />}
          path={'/form2/three'}
          exact
        />
        <PrivateRoute
          component={() => (
            <FormTwoStageOne activeStep={activeStep} moveStep={moveStep} />
          )}
          path={'/form2'}
          exact
        />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
};

Index.propTypes = {
  history: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export default withRouter(Index);
