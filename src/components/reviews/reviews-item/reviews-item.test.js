import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsItem from './reviews-item';

it(`ReviewsItem correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<ReviewsItem
      review={{
        comment: `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
        date: `November 2019`,
        id: `review1`,
        rating: 3,
        user: {
          avatar: `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/9.jpg`,
          id: `user18`,
          name: `Sophie`,
          status: true
        }
      }}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
