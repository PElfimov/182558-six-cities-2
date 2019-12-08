import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {CommentForm} from './comment-form';
import {DEFAULT_COMMENT} from '../../constants';

Enzyme.configure({adapter: new Adapter()});

it(`CommentForm correctly renders after relaunch`, () => {
  const tree = shallow(<CommentForm
    rating="4"
    comment={DEFAULT_COMMENT}
    addReview={() => {}}
    addValueFormChangeHandler={() => {}}
    idHotel="1"
  />);

  expect(toJSON(tree)).toMatchSnapshot();
});
