import React from 'react';
import InputArea from './InputArea';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const baseProps = {
  inputChar: '',
  gameClear: false,
  gameOver: false
};

describe('InputArea', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<InputArea {...baseProps} />);
    const buttonWrapper = wrapper.find('Grid');
    // expect(buttonWrapper).toBe(true);
    expect(buttonWrapper).toHaveLength(0);
  });
});
