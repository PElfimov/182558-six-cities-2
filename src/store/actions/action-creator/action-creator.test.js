import {ActionType, ActionCreator} from './action-creator';

describe(`Actions creator returns right action`, () => {
  it(`for changing current city`, () => {
    const city = `Moscow`;
    const action = ActionCreator.changeCity(city);

    expect(action).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Moscow`
    });
  });
});
