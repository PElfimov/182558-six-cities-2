import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import {withCommentForm} from './with-comment-form';


Enzyme.configure({adapter: new Adapter()});


const MockComponent = () => <div />;
const MockComponentWrapped = withCommentForm(MockComponent);
const comment = `Bla Bla`;

describe(`withCommentForm  HOC work correct`, () => {
  it(`CommentForm component is correct`, () => {
    const wrapper = shallow(
        <MockComponentWrapped addReview={jest.fn()}/>


    );
    expect(wrapper.state().rating).toEqual(`0`);
    expect(wrapper.state().comment).toEqual(``);
    wrapper.props().addValueFormChangeHandler({target: {value: `5`}}, `rating`);
    wrapper.props().addValueFormChangeHandler({target: {value: comment}}, `comment`);
    expect(wrapper.state().rating).toEqual(`5`);
    expect(wrapper.state().comment).toEqual(comment);
  });
});
