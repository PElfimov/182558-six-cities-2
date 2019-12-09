
import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import withSortList from './with-sort-list';

Enzyme.configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withSortList(MockComponent);

describe(`withSortList HOC work correct`, () => {
  it(`SortList component is correct`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    expect(wrapper.state().isSortOpened).toEqual(false);
    wrapper.props().onSortListClick();
    expect(wrapper.state().isSortOpened).toEqual(true);
  });
});
