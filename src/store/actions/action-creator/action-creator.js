const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  ADD_LOGIN: `ADD_LOGIN`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  CHANGE_SORT: `CHANGE_SORT`
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  changeSortName: (sortName) => ({
    type: ActionType.CHANGE_SORT,
    payload: sortName,
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
  loadReviews: (reviews) => {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },
};

export {
  ActionCreator,
  ActionType
};
