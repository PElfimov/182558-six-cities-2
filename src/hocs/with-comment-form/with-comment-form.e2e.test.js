import React from 'react';
import Enzyme, {mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import withCommentForm from './with-comment-form';
import configureStore from "redux-mock-store";
// import {Provider} from "react-redux";


Enzyme.configure({adapter: new Adapter()});

const initialState = {addReview: jest.fn()};
const mockStore = configureStore();
let store;
store = mockStore(initialState);

const MockComponent = () => <div />;
const MockComponentWrapped = withCommentForm(MockComponent);
const comment = `Bla Bla`;

describe(`withCommentForm  HOC work correct`, () => {
  it(`CommentForm component is correct`, () => {
    const wrapper = mount(

        <MockComponentWrapped store={store}/>


    );
    expect(wrapper.state().rating).toEqual(`0`);
    expect(wrapper.state().comment).toEqual(``);
    wrapper.props().addValueFormChangeHandler({target: {value: `5`}}, `rating`);
    wrapper.props().addValueFormChangeHandler({target: {value: comment}}, `comment`);
    expect(wrapper.state().rating).toEqual(`5`);
    expect(wrapper.state().comment).toEqual(comment);
  });
});
