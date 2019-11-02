import React from "react";
import renderer from "react-test-renderer";
import {offers, activeCity} from "../../mocks/testMocks";
import Map from './points-map';

describe(`Map component tests`, () => {
  it(`Component render correctly`, () => {
    const tree = renderer
      .create(<Map city={activeCity} offers={offers} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});


