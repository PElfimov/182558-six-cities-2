import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Header from '../header/header';
import {getFavoriteOffers, getFavoriteCityList} from '../../store/selectors/selectors';
import LiFragment from './li-fragment/li-fragment';
import Footer from './../footer/footer';

const _getOffersFiltered = (city, offers) => {
  const list = offers.filter((offer) => offer.city.name === city);
  return list;
};


const Favorites = (props) => {
  const {offers, cities} = props;
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((it) => {
                return (
                  <LiFragment
                    key={`${it} - city`}
                    offers={_getOffersFiltered(it, offers)}
                    city={it}
                  />);
              })}

            </ul>
          </section>
        </div>
      </main>
      <Footer />
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
  ).isRequired,
  cities: PropTypes.array
};


const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    offers: getFavoriteOffers(state),
    cities: getFavoriteCityList(state),
    allOffers: state.externalData.offers,
  });


export {Favorites};

export default connect(mapStateToProps, null)(Favorites);
