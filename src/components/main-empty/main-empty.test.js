import React from 'react';
import renderer from 'react-test-renderer';
import MainEmpty from './main-empty';

it(`HotelCard correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <MainEmpty />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
