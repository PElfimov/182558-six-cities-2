import React from 'react';
import HotelCard from './hotel-card';
import {BrowserRouter as Router} from 'react-router-dom';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

jest.mock(`../../../mocks/test-mocks`);

const offer = {
  isPremium: true,
  cost: 120,
  name: `Beautiful & luxurious apartment at great location`,
  rating: 55,
  type: `Apartment`
};

it(`HotelCard correctly renders after relaunch`, () => {
  const tree = shallow(<Router>
    <HotelCard
      offer={offer}
      onHover={jest.fn()} />
  </Router>);

  expect(toJSON(tree)).toMatchSnapshot();
});
