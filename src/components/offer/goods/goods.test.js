import React from 'react';
import renderer from 'react-test-renderer';
import Goods from './goods';

const goods = [
  `Washer`,
  `Baby seat`,
  `Fridge`];
it(`HotelCard correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <Goods
          goods={goods}
        />).toJSON();
  expect(tree).toMatchSnapshot();
});
