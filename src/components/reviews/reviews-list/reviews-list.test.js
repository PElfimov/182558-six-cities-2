import React from 'react';
import renderer from 'react-test-renderer';
import ReviewsList from './reviews-list';

it(`ReviewsList correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<ReviewsList
      reviews={[{
        comment: `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`,
        date: `November 2019`,
        id: 1,
        rating: 3,
        user: {
          avatar: `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/9.jpg`,
          id: 18,
          name: `Sophie`,
          status: true
        }
      }]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
