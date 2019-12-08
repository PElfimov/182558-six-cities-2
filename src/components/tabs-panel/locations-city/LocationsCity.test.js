import React from 'react';
import renderer from 'react-test-renderer';
import LocationsCity from './locations-city';
import {BrowserRouter as Router} from 'react-router-dom';

it(`LocationsCity correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <Router>
          <LocationsCity
            name={`Paris`}
            isActive={true}
            onClick={jest.fn()} />
        </Router>
    )

    .toJSON();
  expect(tree).toMatchSnapshot();
});
