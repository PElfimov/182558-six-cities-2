import React from 'react';
import renderer from 'react-test-renderer';
import {HotelCard} from './hotel-card';
import {BrowserRouter as Router} from 'react-router-dom';

jest.mock(`../../../mocks/test-mocks`);

const offer = {
  isPremium: true,
  cost: 120,
  name: `Beautiful & luxurious apartment at great location`,
  rating: 55,
  type: `Apartment`
};

it(`HotelCard correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <Router>
          <HotelCard
            offer={offer}
            onClick={jest.fn()}
            onHover={jest.fn()} />
        </Router>)

    .toJSON();
  expect(tree).toMatchSnapshot();
});
