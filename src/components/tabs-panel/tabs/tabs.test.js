import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from 'react-router-dom';
import {Tabs} from './tabs';

it(`Tabs correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <Router>
          <Tabs
            cities={[`City1`, `City2`, `City3`]}
            changeCity={jest.fn()}
            activeCity={`City1`} />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
