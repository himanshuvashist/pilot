import React, { Component } from 'react';
import Stepper from 'react-stepper-horizontal';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import StageOneForm from '../components/StageOneForm';
import StageTwoForm from '../components/StageTwoForm';
import StageThreeForm from '../components/StageThreeForm';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { activeStep: 1 };
  }

  moveStep = () => {
    const { activeStep } = this.state;
    this.setState({ activeStep: activeStep + 1 });
  };

  render() {
    console.log(this.props);
    const { activeStep } = this.state;
    const { updateData, state } = this.props;
    let currentStageFormComponent;
    activeStep === 1
      ? (currentStageFormComponent = (
          <StageOneForm moveStep={this.moveStep} updateData={updateData} />
        ))
      : (currentStageFormComponent =
          activeStep === 2 ? (
            <StageTwoForm
              moveStep={this.moveStep}
              updateData={updateData}
              data={state.data}
            />
          ) : (
            <StageThreeForm data={state.data} />
          ));

    return (
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
          {currentStageFormComponent}
        </Container>
      </div>
    );
  }
}

Form.propTypes = {
  state: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  updateData: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};
