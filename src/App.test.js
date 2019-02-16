import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AppHeader from './components/AppHeader';
import GamePanel from './components/GamePanel';

Enzyme.configure({ adapter: new Adapter() });

describe('App test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('has child Components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(AppHeader).length).toBe(1);
    expect(wrapper.find(GamePanel).length).toBe(1);
  });
});

//
// 一文字しか入力できない
// 入力済の値を入れたら無視
// アルファベット以外を入力したら警告
// ゲームオーバーになる
// ミスするとカウントが一つ増える
