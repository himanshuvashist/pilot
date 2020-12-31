import React, { Component } from 'react';
import Stepper from 'react-stepper-horizontal';
import { Container } from 'react-bootstrap';
import StageOneForm from '../components/StageOneForm';
import StageTwoForm from '../components/StageTwoForm';
import StageThreeForm from '../components/StageThreeForm';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { activeStep: 1, data: [] };
  }

  moveStep = () => {
    const { activeStep } = this.state;
    this.setState({ activeStep: activeStep + 1 });
  };

  updateData = (d) => {
    this.setState({ data: [...d] });
  };

  render() {
    const { activeStep, data } = this.state;
    let currentStageFormComponent;
    activeStep === 1
      ? (currentStageFormComponent = (
          <StageOneForm moveStep={this.moveStep} updateData={this.updateData} />
        ))
      : (currentStageFormComponent =
          activeStep === 2 ? (
            <StageTwoForm
              moveStep={this.moveStep}
              updateData={this.updateData}
              data={data}
            />
          ) : (
            <StageThreeForm data={data} />
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
