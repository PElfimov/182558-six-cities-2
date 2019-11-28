import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Header from '../header/header';
import HotelCard from "../main-page/hotel-card/hotel-card";
import ModelOffers from '../../store/model-offers/model-offers';

const Favorites = (props) => {
  const {offers} = props;

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
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
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

Favorites.propTypes = {
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
  ).isRequired
};

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    offers: ModelOffers.parseOffers(state.externalData.offers),
  });

// const mapDispatchToProps = (dispatch) => ({
//   setCities: (cities) => {
//     dispatch(ActionCreator.setCities(cities));
//   },
//   changeCity: (city, offers) => {
//     dispatch(ActionCreator.changeCity(city));
//     dispatch(ActionCreator.setOffers(offers));
//   }
// });

export {Favorites};

export default connect(mapStateToProps, null)(Favorites);
