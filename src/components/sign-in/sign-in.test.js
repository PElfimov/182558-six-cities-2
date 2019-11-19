import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import {SignIn} from './sign-in';

Enzyme.configure({adapter: new Adapter()});

it(`SignIn correctly renders after relaunch`, () => {
  const tree = shallow(<SignIn
    email={``}
    password={``}
    addValueFormChangeHandler={() => {}}
  />);

  expect(toJSON(tree)).toMatchSnapshot();
});
