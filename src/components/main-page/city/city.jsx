import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import HotelCard from "../hotel-card/hotel-card";
import FilterHotels from "../filter-hotels/filter-hotels";
import PointsMap from "../../points-map/points-map";

function handleClick() {}

export default class City extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, handleHover, activeCard} = this.props;
    const sumOffers = offers.length;
    return (
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{sumOffers} places to stay in Amsterdam</b>
            <FilterHotels />
            <div className="cities__places-list places__list tabs__content">
              {offers.map((it, i) => (
                <HotelCard key={name + i} offer={it} onClick={handleClick} onHover={handleHover} />
              ))}
            </div>
          </section>
          <div className="cities__right-section">
            <PointsMap offers={offers} activeCard={activeCard} />
          </div>
        </div>
      </div>
    );
  }
}

City.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.number,
        city: PropTypes.exact({
          name: PropTypes.string,
          coordinates: PropTypes.arrayOf(PropTypes.number)
        }),
        isPremium: PropTypes.bool,
        cost: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.oneOf([`Private room`, `Apartment`]),
        coordinates: PropTypes.array
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
