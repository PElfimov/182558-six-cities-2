import React from 'react';
import renderer from 'react-test-renderer';
import Gallery from './gallery';

const images = [
  `img/room.jpg`,
  `img/apartment-01.jpg`,
  `img/apartment-02.jpg`];
it(`HotelCard correctly renders after relaunch`, () => {
  const tree = renderer
    .create(
        <Gallery
          images={images}
        />).toJSON();
  expect(tree).toMatchSnapshot();
});
