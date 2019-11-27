import React from 'react';
import renderer from 'react-test-renderer';
import BookmarkButton from './bookmark-button';

it(`BookmarkButton correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<BookmarkButton
      onClick={jest.fn()}
      isBookmarkAdded={true} />)

    .toJSON();
  expect(tree).toMatchSnapshot();
});
