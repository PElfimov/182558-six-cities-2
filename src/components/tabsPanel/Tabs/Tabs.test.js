import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './Tabs';

it(`Tabs correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Tabs />)

    .toJSON();
  expect(tree).toMatchSnapshot();
});
