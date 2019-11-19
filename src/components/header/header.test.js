import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from './header';

it(`Sign in  correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Header
      login={{fail: false}}
    />)

    .toJSON();
  expect(tree).toMatchSnapshot();
});
