const getCitiesListFromOffers = (offers) => {
  const citiesList = offers.map((offer) => offer.city.name);

  return Array.from(new Set(citiesList));
};

const getFilteredOffers = (offers, city) => {
  return offers.filter((offer) => offer.city.name === city);
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  ADD_LOGIN: `ADD_LOGIN`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
  addLogin: (loginData) => ({
    type: ActionType.ADD_LOGIN,
    payload: loginData,
  }),
};

export {
  ActionCreator,
  ActionType,
  getFilteredOffers,
  getCitiesListFromOffers
};
