import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

const offers = [
  {
    isPremium: true,
    cost: 120,
    name: `Beautiful & luxurious apartment at great location`,
    rating: 55,
    type: `Apartment`
  },
  {
    isPremium: false,
    cost: 132,
    name: `Wood and stone place`,
    rating: 80,
    type: `Apartment`
  },
  {
    isPremium: true,
    cost: 120,
    name: `Canal View Prinsengracht`,
    rating: 55,
    type: `Apartment`
  },
  {
    isPremium: true,
    cost: 80,
    name: `Nice, cozy, warm big bed apartment`,
    rating: 100,
    type: `Apartment`
  },
  {
    isPremium: true,
    cost: 120,
    name: `Wood and stone place`,
    rating: 88,
    type: `Private room`
  }
];

it(`Main correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Main offers={offers} />)

    .toJSON();
  expect(tree).toMatchSnapshot();
});
