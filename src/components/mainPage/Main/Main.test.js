import React from 'react';
import renderer from 'react-test-renderer';
import Main from './Main';

it(`Main correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Main />)

    .toJSON();
  expect(tree).toMatchSnapshot();
});
