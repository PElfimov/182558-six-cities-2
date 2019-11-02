import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import HotelCard from "../hotel-card/hotel-card";
import FilterHotels from "../filter-hotels/filter-hotels";
import Map from "../../map/map";

function handleClick() {}

export default class City extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: {}
    };

    this._handleHover = this._handleHover.bind(this);
  }

  _handleHover(data) {
    this.setState({
      activeCard: Object.assign(this.state.activeCard, data)
    });
  }

  render() {
    const offers = this.props.offers;
    return (
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <FilterHotels />
            <div className="cities__places-list places__list tabs__content">
              {offers.map((it, i) => (
                <HotelCard
                  key={name + i}
                  offer={it}
                  onClick={handleClick}
                  onHover={this._handleHover}
                />
              ))}
            </div>
          </section>
          <div className="cities__right-section">
            <Map offers={offers} city={[52.38333, 4.9]} />
          </div>
        </div>
      </div>
    );
  }
}

City.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string,
        isPremium: PropTypes.bool,
        cost: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.oneOf([`Private room`, `Apartment`]),
        coordinates: PropTypes.array
      })
  ).isRequired
};
