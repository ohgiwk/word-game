import React from 'react';
import ReactDOM from 'react-dom';
import GamePanel from './GamePanel';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('GamePanel', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GamePanel />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
