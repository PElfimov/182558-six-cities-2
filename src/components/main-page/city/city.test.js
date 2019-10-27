import React from 'react';
import renderer from 'react-test-renderer';
import City from './city';

it(`City correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<City />)

    .toJSON();
  expect(tree).toMatchSnapshot();
});
