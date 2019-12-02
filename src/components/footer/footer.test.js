import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './footer';
import {BrowserRouter as Router} from 'react-router-dom';

it(`HotelCard correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <Router>
          <Footer />
        </Router>)

    .toJSON();
  expect(tree).toMatchSnapshot();
});
