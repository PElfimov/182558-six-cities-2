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
      .reply(200, [{

        id: 1,
        city: {
          name: `barnaul`,
          location:
          {
            latitude: 53.550341,
            longitude: 10.000654,
            zoom: 13
          }
        },
        [`is_premium`]: true,
        [`is_favorite`]: true,
        price: 380,
        title: `lorem  lorem`,
        rating: 5,
        type: `apartment`,
        location: {
          latitude: 53.558341000000006,
          longitude: 9.999654000000001,
          zoom: 16
        },
        [`preview_image`]: `https://localhost:`,
        images: [],
        bedrooms: 6,
        [`max_adults`]: 4,
        goods: [`lorem`, `lorem`],
        host: {data: false},
        description: `lorem`,
      }]);

    return offersLoader(dispatch, null, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_OFFERS`,
          payload: [{
            id: 1,
            city: {
              name: `barnaul`,
              coordinates: [53.550341, 10.000654],
              zoom: 13
            },
            isPremium: true,
            isFavorite: true,
            cost: 380,
            name: `lorem  lorem`,
            rating: 5,
            type: `apartment`,
            coordinates: [53.558341000000006, 9.999654000000001],
            previewImage: `https://localhost:`,
            images: [],
            bedrooms: 6,
            maxAdults: 4,
            goods: [`lorem`, `lorem`],
            host: {data: false},
            description: `lorem`,
          }]
        });
      });
  });


});
