import React from 'react';
import renderer from 'react-test-renderer';
import LocationsCity from './LocationsCity';

it(`LocationsCity correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<LocationsCity
      name={`Paris`}
      isActive={true}
      onClick={jest.fn()} />)

    .toJSON();
  expect(tree).toMatchSnapshot();
});
