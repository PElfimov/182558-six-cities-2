import {ActionType} from "../../actions/action-creator/action-creator";

const initialState = {
  city: ``,
  cityOffers: [],
  cities: [],
};

Object.freeze(initialState);


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});
    case ActionType.SET_OFFERS:
      return Object.assign({}, state, {cityOffers: action.payload});
    case ActionType.SET_CITIES:
      return Object.assign({}, state, {cities: action.payload});
  }

  return state;
};

export default reducer;
