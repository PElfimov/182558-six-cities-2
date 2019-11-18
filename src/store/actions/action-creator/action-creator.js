const getCitiesListFromOffers = (offers) => {
  const citiesList = offers.map((offer) => offer.city.name);

  return Array.from(new Set(citiesList));
};

const getFilteredOffers = (offers, city) => {
  return offers.filter((offer) => offer.city.name === city);
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_OFFERS: `SET_OFFERS`,
  SET_CITIES: `SET_CITIES`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  setOffers: (items) => ({
    type: ActionType.SET_OFFERS,
    payload: items
  }),
  setCities: (cities) => ({
    type: ActionType.SET_CITIES,
    payload: cities
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
};

export {
  ActionCreator,
  ActionType,
  getFilteredOffers,
  getCitiesListFromOffers
};
