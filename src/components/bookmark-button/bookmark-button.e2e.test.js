import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BookmarkButton from './bookmark-button';

Enzyme.configure({adapter: new Adapter()});


describe(`BookmarkButton component e2e tests`, () => {
  let wrapper;
  let callbackFunction;

  beforeEach(() => {
    callbackFunction = jest.fn();

    wrapper = shallow(<BookmarkButton
      onClick={callbackFunction}
      isBookmarkAdded={true}
    />);
  });


  it(`Check to click on button`, () => {
    const Button = wrapper.find(`button`);
    Button.simulate(`click`);
    expect(callbackFunction).toHaveBeenCalledTimes(1);
  });

});


