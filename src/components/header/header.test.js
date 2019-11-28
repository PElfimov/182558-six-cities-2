import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from './header';
import {BrowserRouter as Router} from 'react-router-dom';

it(`Sign in  correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <Router>
          <Header
            login={{fail: false}}
          />
        </Router>)

    .toJSON();
  expect(tree).toMatchSnapshot();
});
