import localData from './local-data';
import {ActionType} from '../../actions/action-creator/action-creator';

describe(`localData returns right state`, () => {
  it(`with changing city action`, () => {
    const city = `Biysk`;
    const state = {
      city: ``,
      activeSortName: `Popular`
    };
    const action = {
      type: ActionType.CHANGE_CITY,
      payload: city
    };

    expect(localData(state, action)).toEqual({
      city: `Biysk`,
      activeSortName: `Popular`,
    });
  });

  it(`with changing sort Name action`, () => {
    const sort = `Price: low to high`;
    const state = {
      city: `Biysk`,
      activeSortName: `Popular`
    };
    const action = {
      type: ActionType.CHANGE_SORT,
      payload: sort
    };

    expect(localData(state, action)).toEqual({
      city: `Biysk`,
      activeSortName: `Price: low to high`
    });
  });

  it(`return start state`, () => {
    expect(localData(undefined, {})).toEqual({
      city: ``,
      activeSortName: `Popular`
    });
  });

});

