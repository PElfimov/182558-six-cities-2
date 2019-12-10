import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HotelCard from './hotel-card';

Enzyme.configure({adapter: new Adapter()});

const offer = {
  isPremium: true,
  cost: 120,
  name: `Beautiful & luxurious apartment at great location`,
  rating: 55,
  type: `Apartment`
};


describe(`HotelCard component e2e tests`, () => {
  let wrapper;
  let callbackFunction;

  beforeEach(() => {
    callbackFunction = jest.fn();

    wrapper = shallow(<HotelCard
      offer={offer}
      onHover={callbackFunction}
    />);
  });

  it(`Check data in callback function`, () => {
    const cardArea = wrapper.find(`.place-card`);
    cardArea.simulate(`MouseOver`);
    expect(callbackFunction).toHaveBeenCalledWith(offer);
  });

  it(`Check call count function`, () => {
    const cardArea = wrapper.find(`.place-card`);
    cardArea.simulate(`MouseOver`);
    expect(callbackFunction).toBeCalledTimes(1);
  });

});
