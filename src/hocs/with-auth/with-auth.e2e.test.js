import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import {withAuth} from './with-auth';

Enzyme.configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withAuth(MockComponent);

describe(`withSortList HOC work correct`, () => {
  it(`SortList component is correct`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          isAuthorization ={true}
          isLogin={jest.fn()}/>);

    expect(wrapper).toEqual({});

  });
});
