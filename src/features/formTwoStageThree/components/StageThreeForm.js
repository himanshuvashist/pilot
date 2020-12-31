import React, { Component } from 'react';
import { Button, Row, Col, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Photo from './Photo';
import text from '../labels';

export default class StageThreeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: new Array(4).fill(undefined),
      featuredImageIndex: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageUpdate = this.handleImageUpdate.bind(this);
    this.updateFeaturedImage = this.updateFeaturedImage.bind(this);
  }

  handleSubmit() {
    const { data } = this.props;
    const { images } = this.state;
    console.log('data', data);
    console.log('images', images);
  }

  handleImageUpdate(e) {
    const { images } = this.state;
    images[e.index] = e;
    this.setState({ images: [...images] });
  }

  updateFeaturedImage(i) {
    const { images, featuredImageIndex } = this.state;
    // turn old featured image to unfeatured
    if (featuredImageIndex !== null) {
      images[featuredImageIndex].featured = false;
    }
    // update the new featured image in image data
    images[i].featured = true;
    this.setState({ images });
    this.setState({ featuredImageIndex: i });
  }

  render() {
    const { images } = this.state;
    let j = 0;
    return (
      <div>
        <Container>
          <Row xs={2} sm={2} md={4}>
            {images.map((e, i) => {
              j += 1;
              return (
                <Col key={j}>
                  <Photo
                    keyVal={i}
                    updateImage={this.handleImageUpdate}
                    data={images[i]}
                    updateFeaturedImage={this.updateFeaturedImage}
                  />
                </Col>
              );
            })}
          </Row>
          <Button onClick={this.handleSubmit} variant="dark">
            {text.SUBMIT_MSG}
          </Button>
        </Container>
      </div>
    );
  }
}

StageThreeForm.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};
