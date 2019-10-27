import React from 'react';
import renderer from 'react-test-renderer';
import FilterHotels from './filter-hotels';

it(`FilterHotels correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<FilterHotels />)

    .toJSON();
  expect(tree).toMatchSnapshot();
});
