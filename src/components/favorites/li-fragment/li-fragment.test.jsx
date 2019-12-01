import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import LiFragment from './li-fragment';

const offers = [
  {
    id: 1,
    isFavorite: true,
    city: {
      name: `Biysk`,
    }
  },
  {
    id: 2,
    isFavorite: true,
    city: {
      name: `Paris`,
    }
  },
  {
    id: 3,
    isFavorite: true,
    city: {
      name: `Paris`,
    }
  },
  {
    id: 4,
    isFavorite: true,
    city: {
      name: `Paris`,
    }
  },
];

it(`LiFragment correctly render`, () => {
  const tree = shallow(
      <LiFragment
        offers={offers}
        city = {`Paris`}
      />);

  expect(toJSON(tree)).toMatchSnapshot();
});
