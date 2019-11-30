import {
  getOffers,
  getCityList,
  getFilteredOffers,
  getCity,
  getCityOffers
} from './selectors.js';


describe(`Selectors  returns right data`, () => {
  const state = {
    externalData: {
      city: `Paris`,
      offers: [
        {
          id: 1,
          city: {
            name: `Biysk`,
          }
        },
        {
          id: 2,
          city: {
            name: `Barnaul`,
          }
        },
        {
          id: 3,
          city: {
            name: `Gorno-Altaysk`,
          }
        },
        {
          id: 4,
          city: {
            name: `Gorno-Altaysk`,
          }
        },
      ],
      cities: [`fall`, `fall2`]
    },
    localData: {
      city: `Biysk`,
    }
  };
  it(`function return Offers from state`, () => {
    expect(getOffers(state)).toEqual(
        [
          {
            id: 1,
            city: {
              name: `Biysk`,
            }
          },
          {
            id: 2,
            city: {
              name: `Barnaul`,
            }
          },
          {
            id: 3,
            city: {
              name: `Gorno-Altaysk`,
            }
          },
          {
            id: 4,
            city: {
              name: `Gorno-Altaysk`,
            }
          },
        ]
    );
  });

  it(`function return Offers from state`, () => {
    expect(getCity(state)).toEqual(`Biysk`);
  });

  it(`function return right city list`, () => {
    expect(getCityList(state)).toEqual(
        [`Biysk`, `Barnaul`, `Gorno-Altaysk`]
    );
  });

  it(`function return right data structure`, () => {
    expect(getFilteredOffers(state)).toEqual(
        [
          {
            city: `Biysk`,
            offers: [
              {
                id: 1,
                city: {
                  name: `Biysk`,
                }
              },
            ]
          },
          {
            city: `Barnaul`,
            offers: [
              {
                id: 2,
                city: {
                  name: `Barnaul`,
                }
              },
            ]
          },
          {
            city: `Gorno-Altaysk`,
            offers: [
              {
                id: 3,
                city: {
                  name: `Gorno-Altaysk`,
                }
              },
              {
                id: 4,
                city: {
                  name: `Gorno-Altaysk`,
                }
              },
            ]
          },
        ]);
  });

  it(`function return right Offers list`, () => {
    expect(getCityOffers(state)).toEqual(
        [
          {
            id: 1,
            city: {
              name: `Biysk`,
            }
          },
        ]);
  });
});

