import React from 'react';
import renderer from 'react-test-renderer';
import {HotelCard} from './hotel-card';

const offer = {
  isPremium: true,
  cost: 120,
  name: `Beautiful & luxurious apartment at great location`,
  rating: 55,
  type: `Apartment`
};

it(`HotelCard correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<HotelCard
      offer={offer}
      onClick={jest.fn()}
      onHover={jest.fn()} />)

    .toJSON();
  expect(tree).toMatchSnapshot();
});
