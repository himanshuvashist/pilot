import React from 'react';
import Stepper from 'react-stepper-horizontal';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import StageOneForm from '../components/StageOneForm';

const Form = ({ activeStep, moveStep, updateData }) => (
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
      <StageOneForm moveStep={moveStep} updateData={updateData} />
    </Container>
  </div>
);

Form.propTypes = {
  activeStep: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
    .isRequired,
  moveStep: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  updateData: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    .isRequired,
};

export default Form;
