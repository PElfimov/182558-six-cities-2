import React from "react";
import PropTypes from "prop-types";
import HotelCard from "../hotel-card/hotel-card";
import FilterHotels from "../filter-hotels/filter-hotels";
import PointsMap from "../../points-map/points-map";

function handleClick() {}

const City = (props) => {
  const {offers, handleHover, activeCard} = props;
  const sumOffers = offers.length;
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{sumOffers} places to stay in Amsterdam</b>
          <FilterHotels />
          <div className="cities__places-list places__list tabs__content">
            {offers.map((it) => (
              <HotelCard key={it.id} offer={it} onClick={handleClick} onHover={handleHover} />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <PointsMap offers={offers} activeCard={activeCard} />
        </div>
      </div>
    </div>
  );
};

City.propTypes = {
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
  handleHover: PropTypes.func.isRequired,
  activeCard: PropTypes.exact({
    id: PropTypes.number,
    city: PropTypes.exact({
      name: PropTypes.string,
      coordinates: PropTypes.arrayOf(PropTypes.number)
    }),
    isPremium: PropTypes.bool,
    cost: PropTypes.number,
    name: PropTypes.string,
    rating: PropTypes.number,
    type: PropTypes.oneOf([`Private room`, `Apartment`]),
    coordinates: PropTypes.array
  })
};

export default City;
