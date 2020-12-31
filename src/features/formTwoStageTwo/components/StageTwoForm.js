import React, { Component } from 'react';
import { Form, Button, Row, Col, Container, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { cities } from '../misc/city';
import text from '../labels';

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : cities.filter(
        (c) => c.toLowerCase().slice(0, inputLength) === inputValue,
      );
};

export default class StageTwoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      address: '',
      bedroom: 0,
      bathroom: 0,
      description: '',
      sug: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddChange = this.handleAddChange.bind(this);
    this.handleBedroomChange = this.handleBedroomChange.bind(this);
    this.handleBathroomChange = this.handleBathroomChange.bind(this);
    this.handleDesChange = this.handleDesChange.bind(this);
    this.handleSuggestionClick = this.handleSuggestionClick.bind(this);
  }

  componentDidMount() {
    const { data } = this.props;
    if (data.length === 4) {
      data.forEach((d) => {
        if (d[0] === 'bedroom' || d[0] === 'bathroom') {
          this.setState({ [d[0]]: parseInt(d[1], 10) });
        } else {
          this.setState({ [d[0]]: d[1] });
        }
      });
    }
  }

  handleSubmit(event) {
    const { address, bedroom, bathroom, description } = this.state;
    const { updateData, moveStep } = this.props;
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
      this.setState({ validated: true }, () => {
        const tempData = [];
        tempData.push(['address', address]);
        tempData.push(['bedroom', bedroom]);
        tempData.push(['bathroom', bathroom]);
        tempData.push(['description', description]);
        updateData(tempData);
        moveStep();
      });
    }
    this.setState({ validated: true });
  }

  handleAddChange(event) {
    this.setState({ address: event.target.value });
    let t = getSuggestions(event.target.value);
    if (t.length > 2) {
      t = t.slice(0, 2);
    }
    this.setState({ sug: t });
  }

  handleBedroomChange(event) {
    this.setState({ bedroom: event.target.value });
  }

  handleBathroomChange(event) {
    this.setState({ bathroom: event.target.value });
  }

  handleDesChange(event) {
    this.setState({ description: event.target.value });
  }

  handleSuggestionClick(event) {
    this.setState({ address: event.target.innerHTML });
    this.setState({ sug: [] });
  }

  render() {
    const {
      validated,
      address,
      bedroom,
      bathroom,
      description,
      sug,
    } = this.state;
    let j = 0;
    return (
      <div>
        <Container>
          <Form
            noValidate
            validated={validated}
            onSubmit={this.handleSubmit}
            className="form2"
          >
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                {text.ADDRESS_MSG}
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  placeholder="1234 Main St"
                  required
                  onChange={this.handleAddChange}
                  value={address}
                />
                <ListGroup>
                  {sug.map((e) => {
                    j += 1;
                    return (
                      <ListGroup.Item
                        key={j}
                        onClick={this.handleSuggestionClick}
                      >
                        {e}
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="2">
                {text.BATHROOM_MSG}
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  placeholder="Bedroom"
                  max="9999999999"
                  min={1}
                  required
                  onChange={this.handleBedroomChange}
                  value={bedroom}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                {text.BEDROOM_MSG}
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="number"
                  placeholder="Bathroom"
                  max="99999"
                  min={1}
                  required
                  onChange={this.handleBathroomChange}
                  value={bathroom}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm="2">
                {text.DESCRIPTION}
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  as="textarea"
                  rows={2}
                  onChange={this.handleDesChange}
                  value={description}
                />
              </Col>
            </Form.Group>
            <div>
              <Button
                variant="dark"
                type="submit"
                className="form2submitButton"
              >
                {text.SUBMIT_MSG}
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    );
  }
}

StageTwoForm.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  updateData: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    .isRequired,
  moveStep: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};
