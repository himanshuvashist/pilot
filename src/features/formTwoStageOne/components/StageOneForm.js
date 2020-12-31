import React, { Component } from 'react';
import { Button, Row, Form } from 'react-bootstrap';
import { parse } from 'papaparse';
import PropTypes from 'prop-types';
import text from '../labels/index';

export default class StageOneForm extends Component {
  constructor(props) {
    super(props);
    this.uploadRef = React.createRef();
  }

  handleClick = () => {
    this.uploadRef.current.click();
  };

  handleUpload = (e) => {
    const { updateData, moveStep } = this.props;
    e.target.files[0].text().then((t) => {
      const tempText = parse(t);
      updateData(tempText.data);
      moveStep();
    });
  };

  render() {
    const { moveStep } = this.props;
    return (
      <div className="form1">
        <Row>
          <Button
            variant="dark"
            className="form1Button form1bu"
            onClick={moveStep}
          >
            {text.TYPE_MSG}
          </Button>{' '}
        </Row>
        <Row>
          <Form.File
            className="uploadInput"
            accept=".csv"
            hidden
            ref={this.uploadRef}
            onChange={this.handleUpload}
          />
          <Button
            variant="dark"
            className="form1Button form1bu"
            onClick={this.handleClick}
          >
            {text.UPLOAD_FROM_CSV_MSG}
          </Button>{' '}
        </Row>
      </div>
    );
  }
}

StageOneForm.propTypes = {
  updateData: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    .isRequired,
  moveStep: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};
