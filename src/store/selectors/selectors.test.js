import {
  getOffers,
  getCityList,
  getFilteredOffers,
  getCity,
  getCityOffers,
  getFavoriteOffers,
  getSmallHotelsList
} from './selectors.js';


describe(`Selectors  returns right data`, () => {
  const state = {
    externalData: {
      city: `Paris`,
      offers: [
        {
          id: 1,
          isFavorite: true,
          city: {
            name: `Biysk`,
          }
        },
        {
          id: 2,
          isFavorite: false,
          city: {
            name: `Barnaul`,
          }
        },
        {
          id: 3,
          isFavorite: true,
          city: {
            name: `Gorno-Altaysk`,
          }
        },
        {
          id: 4,
          isFavorite: false,
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
            isFavorite: true,
            city: {
              name: `Biysk`,
            }
          },
          {
            id: 2,
            isFavorite: false,
            city: {
              name: `Barnaul`,
            }
          },
          {
            id: 3,
            isFavorite: true,
            city: {
              name: `Gorno-Altaysk`,
            }
          },
          {
            id: 4,
            isFavorite: false,
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

  it(`function return favorite city list`, () => {
    expect(getFavoriteOffers(state)).toEqual(
        [
          {
            id: 1,
            isFavorite: true,
            city: {
              name: `Biysk`,
            }
          },
          {
            id: 3,
            isFavorite: true,
            city: {
              name: `Gorno-Altaysk`,
            }
          },
        ]
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
                isFavorite: true,
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
                isFavorite: false,
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
                isFavorite: true,
                city: {
                  name: `Gorno-Altaysk`,
                }
              },
              {
                id: 4,
                isFavorite: false,
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
            isFavorite: true,
            city: {
              name: `Biysk`,
            }
          },
        ]);
  });

  it(`function return right smallOffersList`, () => {

    const offers = [
      {
        id: 1,
        isFavorite: true,
        city: {
          name: `Biysk`,
        },
      },
      {
        id: 2,
        isFavorite: true,
        city: {
          name: `Biysk`,
        }
      }, {
        id: 3,
        isFavorite: true,
        city: {
          name: `Gorno-Altaysk`,
        }
      },
      {
        id: 4,
        isFavorite: false,
        city: {
          name: `Gorno-Altaysk`,
        }
      },
      {
        id: 5,
        isFavorite: false,
        city: {
          name: `Biysk`,
        }
      },
    ];

    expect(getSmallHotelsList(offers, 1)).toEqual(
        [
          {
            id: 2,
            isFavorite: true,
            city: {
              name: `Biysk`,
            }
          },
          {
            id: 5,
            isFavorite: false,
            city: {
              name: `Biysk`,
            },
          }
        ]);
  });

});

