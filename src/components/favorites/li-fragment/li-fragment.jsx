import React from "react";
import PropTypes from "prop-types";
import HotelCard from '../../main-page/hotel-card/hotel-card';
import {Link} from "react-router-dom";

const LiFragment = (props) => {
  const {offers, city} = props;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={`/${city}`}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((it) => {
          return (
            <HotelCard
              key={`${it.id}`}
              offer={it}
              onClick={() => {}}
              onHover={() => {}}
              type={`favorites`}
            />);
        })}
      </div>
    </li>);
};


LiFragment.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number,
    city: PropTypes.exact({
      name: PropTypes.string,
      coordinates: PropTypes.arrayOf(PropTypes.number),
      zoom: PropTypes.number,
    }),
    isPremium: PropTypes.bool,
    isFavorite: PropTypes.bool,
    cost: PropTypes.number,
    name: PropTypes.string,
    rating: PropTypes.number,
    type: PropTypes.string,
    coordinates: PropTypes.array,
    previewImage: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    bedrooms: PropTypes.number,
    maxAdults: PropTypes.number,
    goods: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.object,
    description: PropTypes.string,
  })
  ).isRequired,
  city: PropTypes.string
};

export default LiFragment;
