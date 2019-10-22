import React from 'react';
import renderer from 'react-test-renderer';
import HotelCard from './HotelCard';

it(`HotelCard correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<HotelCard
      isPremium={true}
      cost={0}
      name={`Best`}
      rating={0}
      type={`Private room`}
      onClick={jest.fn()} />)

    .toJSON();
  expect(tree).toMatchSnapshot();
});
