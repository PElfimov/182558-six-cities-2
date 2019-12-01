import {ActionType} from "../../actions/action-creator/action-creator";

const initialState = {
  city: ``,
};

Object.freeze(initialState);


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});
  }

  return state;
};

export default reducer;
