import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import SmallOffersList from './small-offers-list';
Enzyme.configure({adapter: new Adapter()});

jest.mock(`../../../mocks/test-mocks`);

const offers = [
  {
    isPremium: true,
    id: 1,
    city: {
      name: `barnaul`,
      coordinates: [53.550341, 10.000654],
      zoom: 13
    },
    cost: 120,
    name: `Beautiful & luxurious apartment at great location`,
    rating: 55,
    type: `Apartment`
  },
  {
    isPremium: false,
    id: 2,
    city: {
      name: `barnaul`,
      coordinates: [53.550341, 10.000654],
      zoom: 13
    },
    cost: 132,
    name: `Wood and stone place`,
    rating: 80,
    type: `Apartment`
  },
  {
    isPremium: true,
    id: 3,
    city: {
      name: `barnaul`,
      coordinates: [53.550341, 10.000654],
      zoom: 13
    },
    cost: 120,
    name: `Canal View Prinsengracht`,
    rating: 55,
    type: `Apartment`
  },
  {
    isPremium: true,
    id: 4,
    city: {
      name: `barnaul`,
      coordinates: [53.550341, 10.000654],
      zoom: 13
    },
    cost: 80,
    name: `Nice, cozy, warm big bed apartment`,
    rating: 100,
    type: `Apartment`
  },
  {
    isPremium: true,
    id: 5,
    city: {
      name: `barnaul`,
      coordinates: [53.550341, 10.000654],
      zoom: 13
    },
    cost: 120,
    name: `Wood and stone place`,
    rating: 88,
    type: `Private room`
  }
];

it(`HotelCard correctly renders after relaunch`, () => {
  const tree = shallow(
      <SmallOffersList
        offers={offers}
        id={1} />
  );

  expect(toJSON(tree)).toMatchSnapshot();
});
