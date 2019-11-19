import {ActionCreator} from "../action-creator/action-creator";

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  },
  checkLogin: (email, password) => (dispatch, _, api) => {
    return api.post(`/login`, {
      email,
      password
    })
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(true));
        dispatch(ActionCreator.addLogin(response.data));
      });
  }
};

export default Operation;
