import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import {Main} from './main';
Enzyme.configure({adapter: new Adapter()});


it(`SignIn correctly renders after relaunch`, () => {
  const tree = shallow(<Main />);

  expect(toJSON(tree)).toMatchSnapshot();
});
