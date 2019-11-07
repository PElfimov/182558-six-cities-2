import React, {PureComponent} from "react";
import propTypes from "./prop-types";
import HotelCard from "../hotel-card/hotel-card";
import FilterHotels from "../filter-hotels/filter-hotels";
import PointsMap from "../../points-map/points-map";

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
            <PointsMap offers={offers} />
          </div>
        </div>
      </div>
    );
  }
}

City.propTypes = propTypes;
