import localData from './local-data';
import {ActionType} from '../../actions/action-creator/action-creator';

describe(`localData returns right state`, () => {
  it(`with changing city action`, () => {
    const city = `Biysk`;
    const state = {
      city: `Paris`
    };
    const action = {
      type: ActionType.CHANGE_CITY,
      payload: city
    };

    expect(localData(state, action)).toEqual({
      city: `Biysk`
    });
  });

});

