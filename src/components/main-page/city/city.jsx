import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import HotelCard from "../hotel-card/hotel-card";

import PointsMap from "../../points-map/points-map";
import withHistory from './../../../hocs/with-history/with-history';
import {getCityOffers, sortOfferList} from "../../../store/selectors/selectors";
import SortList from '../../sort-list/sort-list';
import withSortList from '../../../hocs/with-sort-list/with-sort-list';
import MainEmpty from "../../main-empty/main-empty";

const HotelCardWrapped = withHistory(HotelCard);
const SortListWrapped = withSortList(SortList);

const City = (props) => {
  const {offers, handleHover, activeCard, activeCity, activeSortName} = props;
  const sumOffers = offers.length;
  const currentOffers = sortOfferList(offers, activeSortName);

  const getScreen = (count) =>{
    if (count) {
      return (<div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{sumOffers} places to stay in {activeCity}</b>
            <SortListWrapped />
            <div className="cities__places-list places__list tabs__content">
              {currentOffers.map((it) => {
                return (
                  <HotelCardWrapped
                    key={`${it.id}`}
                    offer={it}
                    onClick={() => {}}
                    onHover={handleHover}
                  />);
              })}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map">
              <PointsMap offers={offers} activeCard={activeCard} />
            </section>
          </div>
        </div>
      </div>);
    } else {
      return <MainEmpty name={activeCity}/>;
    }
  };

  return (
    <React.Fragment>
      {getScreen(sumOffers)}
    </React.Fragment>
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
  }),
  activeCity: PropTypes.string.isRequired,
  activeSortName: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    offers: getCityOffers(state),
    activeCity: state.localData.city,
    activeSortName: state.localData.activeSortName});

export {City};

export default connect(
    mapStateToProps,
    null
)(City);
