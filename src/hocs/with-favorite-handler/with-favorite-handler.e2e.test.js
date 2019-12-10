import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import {withFavoriteHandler} from './with-favorite-handler';

Enzyme.configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withFavoriteHandler(MockComponent);
const MockFunction = jest.fn();
const evt = {};

describe(`withSignIn HOC work correct`, () => {
  it(`SignIn component is correct`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          favoriteHotelHandler={MockFunction}/>);
    wrapper.prop(evt.preventDefault = () => {});


    expect(MockFunction).toHaveBeenCalledTimes(0);
  });
});
