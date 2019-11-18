import {ActionType} from "../../actions/action-creator/action-creator";

const externalState = {
  offers: [],
  isAuthorizationRequired: false
};

const externalData = (state = externalState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS: return Object.assign({}, state, {
      offers: action.payload
    });

    case ActionType.REQUIRE_AUTHORIZATION: Object.assign({}, state, {
      isAuthorizationRequired: action.payload
    });
  }

  return state;
};

export default externalData;
