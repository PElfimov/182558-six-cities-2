import React from 'react';
import renderer from 'react-test-renderer';
import Host from './host';

const host = {
  id: 5,
  name: `Nadia`,
  isPro: true,
  avatarUrl: `/fff.jpg`};
const description = `bla bla `;

it(`Host correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <Host
          host={host}
          description = {description}
        />).toJSON();
  expect(tree).toMatchSnapshot();
});
