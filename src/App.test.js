import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('App test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it('', () => {
  //   const wrapper = shallow(<App />);

  //   const buttonWrapper = wrapper.find('Grid');
  //   // expect(buttonWrapper).toBe(true);
  //   expect(buttonWrapper).toHaveLength(0);
  // });
});

//
// 一文字しか入力できない
// 入力済の値を入れたら無視
// アルファベット以外を入力したら警告
// ゲームオーバーになる
// ミスするとカウントが一つ増える
