import React from 'react';
import renderer from 'react-test-renderer';
import FavoritesEmpty from './favorites-empty';

it(`HotelCard correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<FavoritesEmpty />)

    .toJSON();
  expect(tree).toMatchSnapshot();
});
