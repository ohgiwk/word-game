import React from 'react';
import WordArea from './WordArea';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const baseProps = {
  word: 'hello',
  selectedChar: ''
};

describe('WordArea', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<WordArea {...baseProps} />);
    const buttonWrapper = wrapper.find('Grid');
    // expect(buttonWrapper).toBe(true);
    expect(buttonWrapper).toHaveLength(0);
  });

  test('To display selected characters', () => {
    let baseProps = {
      word: 'REACT',
      selectedChar: ''
    };
    let result = '_____';

    const wrapper = shallow(<WordArea {...baseProps} />);
    expect(wrapper.text()).toBe(result);
  });

  test('To display selected characters', () => {
    const baseProps = {
      word: 'REACT',
      selectedChar: ['R']
    };
    const result = 'R____';

    const wrapper = shallow(<WordArea {...baseProps} />);
    expect(wrapper.text()).toBe(result);
  });

  test('To display selected characters', () => {
    const baseProps = {
      word: 'REACT',
      selectedChar: 'REACT'.split('')
    };
    const result = 'REACT';

    const wrapper = shallow(<WordArea {...baseProps} />);
    expect(wrapper.text()).toBe(result);
  });
});
