import React, { Component } from 'react';
import './App.css';

// 辞書サイトからスクレイピング
// 英語APIサーバ
// 英語ゲーム
// selenium

class App extends Component {
  _word = 'hello';
  _selectedChar = [];

  constructor(props) {
    super(props);

    this.check = this.check.bind(this);
  }

  check(char) {
    console.log('check');
    this._selectedChar.push(char);
  }

  render() {
    const word = 'hello';
    const inputStyle = { border: 'solid, black 1px' };

    return (
      <div className="App">
        <div className="word">
          {word.split('').map((w, i) => {
            const c = this._selectedChar.indexOf(w) > 0 ? w : '_';
            return (
              <span key={i} className="character">
                {c}
              </span>
            );
          })}
        </div>
        <input type="text" maxLength="1" style={inputStyle} />

        <button onClick={this.check}>チェック</button>
      </div>
    );
  }
}

export default App;
