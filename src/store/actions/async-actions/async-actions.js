import {ActionCreator} from "../action-creator/action-creator";

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  },
  checkLogin: (email, password, history) => (dispatch, _, api) => {
    return api.post(`/login`, {
      email,
      password
    })
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(true));
        dispatch(ActionCreator.addLogin(response.data));
        history.push(`/`);
      });
  },
  favoriteHotelHandler: (id, status) => (dispatch, getState, api) => {
    const convertStatus = Number(status);
    return api.post(`/favorite/${id}/${convertStatus}`)
    .then((response) => {
      if (!response.error) {
        const state = getState();
        const {offers} = state.externalData;
        const updatePlaces = offers.map((item) => item.id === response.data.id ? response.data : item);
        dispatch(ActionCreator.loadOffers(updatePlaces));
      }
    });
  }
};

export default Operation;
