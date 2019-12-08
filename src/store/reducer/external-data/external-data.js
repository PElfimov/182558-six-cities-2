import {ActionType} from "../../actions/action-creator/action-creator";

const externalState = {
  offers: [],
  isAuthorizationRequired: false,
  login: null,
  reviews: [],
};

const reducer = (state = externalState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS: return Object.assign({}, state, {
      offers: action.payload
    });

    case ActionType.REQUIRE_AUTHORIZATION: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload
    });
    case ActionType.ADD_LOGIN: return Object.assign({}, state, {
      login: action.payload,
    });
    case ActionType.LOAD_REVIEWS: return Object.assign({}, state, {
      reviews: action.payload,
    });

  }

  return state;
};

export default reducer;
