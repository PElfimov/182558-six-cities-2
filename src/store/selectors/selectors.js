import {createSelector} from "reselect";

const NAME_SPACE = `externalData`;


export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

export const getCity = (city) => {
  return city;
};

export const getCityList = createSelector(
    getOffers,
    (offers) => {
      const citiesList = offers.map((offer) => offer.city.name);
      return Array.from(new Set(citiesList));
    }
);

export const getFilteredOffers = createSelector(
    getOffers,
    getCityList,
    (offers, cities) => cities.map((it) => {
      const filteredOffers = offers.filter((offer) => offer.city.name === it);
      return Object.assign({}, {city: it, offers: filteredOffers});
    })
);


