import React from "react";
import renderer from "react-test-renderer";
import {Tabs} from './tabs';

it(`Tabs correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Tabs
      cities={[`City1`, `City2`, `City3`]}
      onChangeCity={jest.fn()}
      activeCity={`City1`} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
