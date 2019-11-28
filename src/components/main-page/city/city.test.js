import React from 'react';
import City from './city';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

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

it(`SignIn correctly renders after relaunch`, () => {
  const tree = shallow(<City offers={offers} handleHover={jest.fn()} />);

  expect(toJSON(tree)).toMatchSnapshot();
});
