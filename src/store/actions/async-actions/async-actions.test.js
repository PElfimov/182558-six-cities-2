import MockAdapter from "axios-mock-adapter";
import createAPI from "../../../api";
import Operation from "../async-actions/async-actions";

describe(`load data test group`, () => {
  it(`Should make a correct call to /offers`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const offersLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{lul: true}]);

    return offersLoader(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_OFFERS`,
          payload: [{lul: true}]
        });
      });
  });


});
