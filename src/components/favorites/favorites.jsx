import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Header from '../header/header';
import {getFavoriteOffers, getFavoriteCityList} from '../../store/selectors/selectors';
import Footer from './../footer/footer';
import MainFragment from './main-fragment/main-fragment';
import FavoritesEmpty from './favorites-empty/favorites-empty';


const _getScreen = (offers, cities) =>{
  if (offers.length !== 0) {
    return (
      <MainFragment
        offers ={offers}
        cities = {cities}/>
    );
  } else {
    return (
      <FavoritesEmpty/>
    );
  }
};

const Favorites = (props) => {
  const {offers, cities} = props;
  return (
    <div className="page">
      <Header />
      {_getScreen(offers, cities)}
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
