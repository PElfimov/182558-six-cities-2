import {createSelector} from "reselect";


export const getOffers = (state) => {
  return [...state[`externalData`].offers];
};


export const getCity = (state) => {
  return state[`localData`].city;
};

export const getCityList = createSelector(
    getOffers,
    (offers) => {
      const citiesList = offers.map((offer) => offer.city.name);
      return Array.from(new Set(citiesList));
    }
);

export const getCityOffers = createSelector(
    getOffers,
    getCity,
    (offers, city) => offers.filter((offer) => offer.city.name === city)
);

export const getFilteredOffers = createSelector(
    getOffers,
    getCityList,
    (offers, cities) => cities.map((it) => {
      const filteredOffers = offers.filter((offer) => offer.city.name === it);
      return Object.assign({}, {city: it, offers: filteredOffers});
    })
);


