import React from "react";
import PropTypes from "prop-types";
import Tabs from './../../tabs-panel/tabs/tabs';
import Header from './../../header/header';
import withActiveCard from './../../../hocs/with-active-card/with-active-card';
import City from './../city/city';

function Main(props) {

  const WithActiveCard = withActiveCard(City);
  const {city, cities, cityOffers, replaceOffers} = props;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs
          cities={cities}
          activeCity={city}
          onChangeCity={(selectedCity) => replaceOffers(selectedCity)}
        />
        <WithActiveCard offers={cityOffers} />
      </main>
    </div>
  );
}

Main.propTypes = {
  cityOffers: PropTypes.arrayOf(PropTypes.exact({
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
  city: PropTypes.string,
  cities: PropTypes.arrayOf(PropTypes.string),
  replaceOffers: PropTypes.func
};

export default Main;


