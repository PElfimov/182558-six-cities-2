import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import CommentForm from './comment-form';


const comment = `Bla Bla`;

Enzyme.configure({adapter: new Adapter()});

it(`CommentForm correctly renders after relaunch`, () => {
  const tree = shallow(<CommentForm
    rating="4"
    comment={comment}
    addReview={() => {}}
    addValueFormChangeHandler={() => {}}
    idHotel={1}
  />);

  expect(toJSON(tree)).toMatchSnapshot();
});
