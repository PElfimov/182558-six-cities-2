const offers = [
  {
    id: 1,
    isPremium: true,
    cost: 120,
    name: `Beautiful & luxurious apartment at great location`,
    rating: 55,
    type: `Apartment`,
    coordinates: [52.3909553943508, 4.85309666406198]
  },
  {
    id: 2,
    isPremium: false,
    cost: 132,
    name: `Wood and stone place`,
    rating: 80,
    type: `Apartment`,
    coordinates: [52.369553943508, 4.85309666406198]
  },
  {
    id: 3,
    isPremium: true,
    cost: 120,
    name: `Canal View Prinsengracht`,
    rating: 55,
    type: `Apartment`,
    coordinates: [52.3909553943508, 4.929309666406198]
  },
  {
    id: 4,
    isPremium: true,
    cost: 80,
    name: `Nice, cozy, warm big bed apartment`,
    rating: 100,
    type: `Apartment`,
    coordinates: [52.3809553943508, 4.939309666406198]
  }];
const activeCity = [52.38333, 4.9];

const getCitiesListFromOffers = jest.fn();
const getFilteredOffers = jest.fn();
const toString = jest.fn();

export {offers, activeCity, getCitiesListFromOffers, getFilteredOffers, toString};
