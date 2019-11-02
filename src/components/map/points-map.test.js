import React from "react";
import renderer from "react-test-renderer";
import {offers, activeCity} from "../../mocks/testMocks";
import PointsMap from './points-map';


it(`Maps correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<PointsMap offers={offers} city={activeCity} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
