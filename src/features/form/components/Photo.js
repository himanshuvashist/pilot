import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { Button, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import text from '../labels';

export default class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = { src: '', featured: false };
    this.handleDrop = this.handleDrop.bind(this);
    this.handleFeatured = this.handleFeatured.bind(this);
  }

  handleDrop(e) {
    const { updateImage, keyVal } = this.props;
    const { featured } = this.state;
    const temp = new FileReader();
    temp.addEventListener('load', () => {
      this.setState({ src: temp.result });
      updateImage({
        index: keyVal,
        name: e[0].name,
        src: temp.result,
        featured,
      });
    });
    temp.readAsDataURL(e[0]);
  }

  handleFeatured() {
    const { data, updateFeaturedImage } = this.props;
    updateFeaturedImage(data.index);
  }

  render() {
    const { data } = this.props;
    const { src } = this.state;
    let s = null;
    if (data !== undefined) {
      s = data.featured ? (
        <div>
          <Row>
            <span className="star" role="img" aria-label="star">
              ⭐
            </span>
          </Row>
        </div>
      ) : (
        <Button variant="light" onClick={this.handleFeatured}>
          {text.SELECT_ME_AS_FEATURED_MSG}
        </Button>
      );
    }
    return (
      <div>
        <div className="photoCard">
          {data === undefined ? (
            <Dropzone
              accept="image/*"
              onDrop={this.handleDrop}
              multiple={false}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()} className="dropArea">
                  <input {...getInputProps()} />
                  <p>{text.DRAG_OR_DROP_MSG}</p>
                </div>
              )}
            </Dropzone>
          ) : (
            <img src={src} className="imgPreview" alt="preview" />
          )}
        </div>
        <div>{s}</div>
      </div>
    );
  }
}

Photo.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.string,
    PropTypes.object,
  ]),
  updateFeaturedImage: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  updateImage: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  keyVal: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

Photo.defaultProps = {
  data: undefined,
};
