import React from "react";
import PropTypes from "prop-types";

const Gallery = (props) => {
  const {images} = props;
  return (
    <div className="property__gallery">
      {images.map((it, index) => {
        return (
          <div key={`${it}-${index}`} className="property__image-wrapper">
            <img className="property__image" src={it} alt="Photo studio" />
          </div>);
      })}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Gallery;
