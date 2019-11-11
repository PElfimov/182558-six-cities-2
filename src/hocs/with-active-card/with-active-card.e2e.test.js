import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropTypes from 'prop-types';
import withActiveCard from './with-active-card';

Enzyme.configure({adapter: new Adapter()});

const offers = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
];


const MockComponent = (props) => {
  const {handleHover, cards} = props;

  return (
    <div>
      <ul>
        {cards.map((it) => (
          <li key={it.id} onMouseOver={() => {
            handleHover(it);
          }} />
        ))}
      </ul>
    </div>
  );
};

MockComponent.propTypes = {
  handleHover: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number,
  })).isRequired,
};


describe(`Component return by right state`, () => {
  it(`reacts correctly to mouseover event`, () => {

    const MockComponentWrapped = withActiveCard(MockComponent);

    const wrapper = mount(<MockComponentWrapped cards={offers} />
    );

    expect(wrapper.state(`activeCard`)).toEqual({});

    wrapper.find(`li`).at(2).simulate(`mouseover`);
    expect(wrapper.state(`activeCard`)).toEqual({id: 3});
  });
});
