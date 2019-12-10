import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {App} from './app';
Enzyme.configure({adapter: new Adapter()});


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

const setCities = jest.fn();
const changeCity = jest.fn();

it(`SignIn correctly renders after relaunch`, () => {
  const tree = shallow(<App offers={offers}
    setCities={setCities}
    changeCity={changeCity}
  />);

  expect(toJSON(tree)).toMatchSnapshot();
});
