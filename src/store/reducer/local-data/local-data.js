import {ActionType} from "../../actions/action-creator/action-creator";

const initialState = {
  city: ``,
  activeSortName: `Popular`
};

Object.freeze(initialState);


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});

    case ActionType.CHANGE_SORT:
      return Object.assign({}, state, {
        activeSortName: action.payload
      });
  }

  return state;
};

export default reducer;
