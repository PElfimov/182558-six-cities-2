import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HotelCard from './hotel-card';


Enzyme.configure({adapter: new Adapter()});

it(`HotelCard is correctly rendered after relaunch E2E test`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<HotelCard
    isPremium={true}
    cost={0}
    name={`Best`}
    rating={0}
    type={`Private room`}
    onClick={clickHandler}
  />);
  const startButton = app.find(`.jsTitle`);
  startButton.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
