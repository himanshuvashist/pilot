import React from 'react';
import Stepper from 'react-stepper-horizontal';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import StageTwoForm from '../components/StageTwoForm';

const Form = ({ activeStep, data, moveStep, updateData }) => (
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
      <StageTwoForm moveStep={moveStep} updateData={updateData} data={data} />
    </Container>
  </div>
);

Form.propTypes = {
  activeStep: PropTypes.oneOfType([PropTypes.number]).isRequired,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  moveStep: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  updateData: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    .isRequired,
};

export default Form;
