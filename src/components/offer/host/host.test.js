import React from 'react';
import renderer from 'react-test-renderer';
import Host from './host';

const host = {
  id: 5,
  name: `Nadia`,
  isPro: true,
  avatarUrl: `/fff.jpg`,
  description: `bla bla `};
it(`Host correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <Host
          host={host}
        />).toJSON();
  expect(tree).toMatchSnapshot();
});
