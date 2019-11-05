import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';

const offers = [
  {
    id: 1,
    city: {
      name: `Amsterdam`,
      coordinates: [52.38333, 4.9]
    },
    isPremium: true,
    cost: 120,
    name: `Beautiful & luxurious apartment at great location`,
    rating: 55,
    type: `Apartment`,
    coordinates: [52.3909553943508, 4.85309666406198]
  },
  {
    id: 2,
    city: {
      name: `Amsterdam`,
      coordinates: [52.38333, 4.9]
    },
    isPremium: false,
    cost: 132,
    name: `Wood and stone place`,
    rating: 80,
    type: `Apartment`,
    coordinates: [52.369553943508, 4.85309666406198]
  },
  {
    id: 3,
    city: {
      name: `Amsterdam`,
      coordinates: [52.38333, 4.9]
    },
    isPremium: true,
    cost: 120,
    name: `Canal View Prinsengracht`,
    rating: 55,
    type: `Apartment`,
    coordinates: [52.3909553943508, 4.929309666406198]
  }];

jest.mock(`../points-map/points-map`, () => jest.fn().mockReturnValue(null));
jest.mock(`../main-page/city/city`, () => jest.fn().mockReturnValue(null));
jest.mock(`../../reducer/reducer`, () => jest.fn().mockReturnValue(null));
jest.mock(`../tabs-panel/tabs/tabs`, () => jest.fn().mockReturnValue(null));


it(`APP correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App offers={offers} />)

    .toJSON();
  expect(tree).toMatchSnapshot();
});
