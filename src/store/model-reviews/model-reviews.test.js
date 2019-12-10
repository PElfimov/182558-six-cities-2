import ModelReviews from './model-reviews';


const data = [{

  id: 2,
  user: {
    id: 3,
    [`is_pro`]: true,
    name: `User`,
    [`avatar_url`]: `http`,
  },
  rating: 4,
  comment: `Bla Bla`,
  date: `12/05/19`
}];


describe(`localData returns right state`, () => {
  it(`with changing city action`, () => {


    expect(ModelReviews.parseReviews(data)).toEqual([{
      id: 2,
      user: {
        id: 3,
        isPro: true,
        name: `User`,
        avatar: `http`,
      },
      rating: 4,
      comment: `Bla Bla`,
      date: `12/05/19`
    }]);
  });
});
