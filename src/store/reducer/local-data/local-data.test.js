import localData from './local-data';
import {ActionType} from '../../actions/action-creator/action-creator';

describe(`localData returns right state`, () => {
  it(`with changing city action`, () => {
    const city = `Biysk`;
    const state = {
      city: `Paris`,
      cities: []
    };
    const action = {
      type: ActionType.CHANGE_CITY,
      payload: city
    };

    expect(localData(state, action)).toEqual({
      city: `Biysk`,
      cities: []
    });
  });


  it(`with setting cities list action`, () => {
    const cities = [`Biysk`, `Berlin`];
    const state = {
      city: ``,
      cities: []
    };


    const action = {
      type: ActionType.SET_CITIES,
      payload: cities
    };


    expect(localData(state, action)).toEqual({
      city: ``,
      cities: [`Biysk`, `Berlin`]
    });
  });
});

