import localData from './local-data';
import {ActionType} from '../../actions/action-creator/action-creator';

describe(`localData returns right state`, () => {
  it(`with changing city action`, () => {
    const city = `Biysk`;
    const state = {
      city: `Paris`,
      offers: [],
      cities: []
    };
    const action = {
      type: ActionType.CHANGE_CITY,
      payload: city
    };

    expect(localData(state, action)).toEqual({
      city: `Biysk`,
      offers: [],
      cities: []
    });
  });


  it(`with changing offers action`, () => {
    const offers = [
      {
        id: 1,
        city: {name: `Moscow`}
      },
      {
        id: 2,
        city: {name: `St Petersburg`}
      },
      {
        id: 3,
        city: {name: `Barnaul`}
      }
    ];
    const state = {
      city: ``,
      cityOffers: [],
      cities: []
    };


    const action = {
      type: ActionType.SET_OFFERS,
      payload: offers
    };


    expect(localData(state, action)).toEqual({
      city: ``,
      cityOffers: [
        {
          id: 1,
          city: {name: `Moscow`}
        },
        {
          id: 2,
          city: {name: `St Petersburg`}
        },
        {
          id: 3,
          city: {name: `Barnaul`}
        }
      ],
      cities: []
    });
  });

  it(`with setting cities list action`, () => {
    const cities = [`Biysk`, `Berlin`];
    const state = {
      city: ``,
      offers: [],
      cities: []
    };


    const action = {
      type: ActionType.SET_CITIES,
      payload: cities
    };


    expect(localData(state, action)).toEqual({
      city: ``,
      offers: [],
      cities: [`Biysk`, `Berlin`]
    });
  });
});

