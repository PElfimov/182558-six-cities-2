import React, {PureComponent} from "react";
import propTypes from "./prop-types";
import HotelCard from "../hotel-card/hotel-card";
import FilterHotels from "../filter-hotels/filter-hotels";
import PointsMap from "../../map/points-map";

function handleClick() {}

export default class City extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: {},
      activeCity: [52.38333, 4.9]
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
    const activeCity = this.state.activeCity;
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
            <PointsMap offers={offers} city={activeCity} />
          </div>
        </div>
      </div>
    );
  }
}

City.propTypes = propTypes;
