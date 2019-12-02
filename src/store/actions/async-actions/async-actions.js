import {ActionCreator} from "../action-creator/action-creator";
import ModelOffers from '../../model-offers/model-offers';

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`).then((response) => {
      const offers = ModelOffers.parseOffers(response.data);
      dispatch(ActionCreator.loadOffers(offers));
    });
  },
  checkLogin: (email, password, history) => (dispatch, _, api) => {
    return api
      .post(`/login`, {
        email,
        password
      })
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(true));
        dispatch(ActionCreator.addLogin(response.data));
        history.push(`/`);
      });
  },
  getLogin: () => (dispatch, _, api) => {
    return api.get(`/login`)
      .then((response) => {
        if (response) {
          dispatch(ActionCreator.requireAuthorization(true));
          dispatch(ActionCreator.addLogin(response.data));
        }
      });
  },
  favoriteHotelHandler: (id, status, history) => (dispatch, getState, api) => {
    const convertStatus = Number(status);
    return api.post(`/favorite/${id}/${convertStatus}`)
    .then((response) => {
      if (!response.isAxiosError) {
        const state = getState();
        const {offers} = state.externalData;

        const updatePlaces = offers.map((item) => {
          if (item.id === response.data.id) {
            const element = Object.assign({}, item);
            element.isFavorite = !item.isFavorite;
            return element;
          } else {
            return item;
          }
        });
        dispatch(ActionCreator.loadOffers(updatePlaces));
      } else {
        history.push(`/login`);
      }
    });
  }
};

export default Operation;
