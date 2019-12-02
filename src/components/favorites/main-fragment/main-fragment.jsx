import React from "react";
import PropTypes from "prop-types";
import LiFragment from './../li-fragment/li-fragment';

const _getOffersFiltered = (city, offers) => {
  const list = offers.filter((offer) => offer.city.name === city);
  return list;
};

const MainFragment = (props) => {
  const {offers, cities} = props;
  return (
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
  );
};

MainFragment.propTypes = {
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

export default MainFragment;

