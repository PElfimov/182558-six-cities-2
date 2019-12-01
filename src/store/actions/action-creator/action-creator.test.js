import {ActionType, ActionCreator, getFilteredOffers, getCitiesListFromOffers} from './action-creator';

describe(`Actions creator returns right action`, () => {
  it(`for changing current city`, () => {
    const city = `Moscow`;
    const action = ActionCreator.changeCity(city);

    expect(action).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Moscow`
    });
  });

  it(`for setting cities list`, () => {
    const cities = [`Moscow`, `Berlin`];
    const action = ActionCreator.setCities(cities);

    expect(action).toEqual({
      type: ActionType.SET_CITIES,
      payload: cities
    });
  });
});


describe(`getFilteredOffers function`, () => {
  it(`returns correctly filtered array`, () => {
    const city = `Biysk`;
    const offers = [{
      id: 1,
      city: {name: `Biysk`}
    },
    {
      id: 2,
      city: {name: `Moscow`}
    },
    {
      id: 3,
      city: {name: `Biysk`}
    },
    {
      id: 4,
      city: {name: `Paris`}
    }
    ];

    expect(getFilteredOffers(offers, city))
      .toEqual([{
        id: 1,
        city: {name: `Biysk`}
      }, {
        id: 3,
        city: {name: `Biysk`}
      }]
      );
  });
});


describe(`getCitiesListFromOffers function`, () => {
  it(`returns correctly filtered array`, () => {
    const offers = [{
      id: 1,
      city: {name: `Biysk`}
    },
    {
      id: 2,
      city: {name: `Moscow`}
    },
    {
      id: 3,
      city: {name: `Biysk`}
    },
    {
      id: 4,
      city: {name: `Paris`}
    }
    ];

    expect(getCitiesListFromOffers(offers))
      .toEqual([`Biysk`, `Moscow`, `Paris`]);

  });
});
