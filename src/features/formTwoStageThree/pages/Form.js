import React from 'react';
import Stepper from 'react-stepper-horizontal';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import StageThreeForm from '../components/StageThreeForm';

const Form = ({ activeStep, state }) => (
  <div>
    <Container>
      <Stepper
        steps={[
          { title: 'Step One' },
          { title: 'Step Two' },
          { title: 'Step Three' },
        ]}
        activeStep={activeStep - 1}
        activeColor={`#343a40`}
        completeColor={`#343a40`}
      />
      <StageThreeForm data={state.data} />
    </Container>
  </div>
);

Form.propTypes = {
  activeStep: PropTypes.oneOfType([PropTypes.number]).isRequired,
  state: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

export default Form;
