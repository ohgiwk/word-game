import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import WordArea from './WordArea';
import InputArea from './InputArea';

export default class GamePanel extends React.Component {
  constructor(props) {
    super(props);
    const word = 'hello';

    this.state = {
      word: word.toUpperCase(),
      selectedChar: [],
      inputChar: '',
      checkChar: '',
      mistakeCount: 0,
      gameOver: false,
      gameClear: false,
      text: ''
    };

    this.check = this.check.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  get isGameClear() {
    const { word, selectedChar } = this.state;
    return word.split('').every(w => selectedChar.indexOf(w) >= 0);
  }

  /**
   * @param {string} checkChar
   * @returns boolean
   * @memberof App
   */
  isCharExist(checkChar) {
    const { word } = this.state;
    return word.toUpperCase().indexOf(checkChar) >= 0;
  }

  /**
   * @param {string} char
   * @returns
   * @memberof App
   */
  isAlphabet(char) {
    const result = /[A-Z]/.exec(char);
    return !!result;
  }

  check() {
    const { selectedChar, inputChar, mistakeCount } = this.state;

    const char = inputChar;
    this.setState({
      checkChar: char,
      inputChar: ''
    });

    if (this.validation(inputChar)) {
      this.setState({
        selectedChar: [...selectedChar, char]
      });

      if (!this.isCharExist(char)) {
        const count = mistakeCount + 1;
        this.setState({
          mistakeCount: count,
          text: `Sorry.. ${char} is not exists.`
        });

        if (count >= 5) {
          this.setState({
            gameOver: true,
            text: 'Game Over...'
          });
        }
      } else {
        this.setState({
          text: `Yes!! ${char} is exists.`
        });
        if (this.isGameClear) {
          this.setState({
            gameClear: true,
            text: 'Game Clear!'
          });
        }
      }
    }

    setTimeout(() => {
      this.setState({
        checkChar: '',
        text: ''
      });
    }, 3000);
  }

  validation(inputChar) {
    const { gameOver, gameClear, selectedChar } = this.state;
    if (inputChar === '' || gameOver || gameClear) {
      return false;
    }

    if (selectedChar.indexOf(inputChar) >= 0) {
      this.setState({
        text: `${inputChar} is already exists.`
      });
      return false;
    }

    if (!this.isAlphabet(inputChar)) {
      this.setState({
        text: `${inputChar} is not Alphabet.`
      });
      return false;
    }
    return true;
  }

  /**
   *
   * @param {Object} event
   */
  onChangeInput(event) {
    const char = event.target.value;
    this.setState({
      inputChar: char.toUpperCase()
    });
  }

  render() {
    const {
      word,
      inputChar,
      text,
      selectedChar,
      mistakeCount,
      gameClear,
      gameOver
    } = this.state;
    return (
      <Card style={{ marginTop: '1rem' }}>
        <CardContent>
          <WordArea word={word} selectedChar={selectedChar} />
          <Typography className="result" align="center">
            {text || 'Please input an alphabet.'}
          </Typography>
          <Typography align="center">miss: {mistakeCount} / 5</Typography>
          <InputArea
            inputChar={inputChar}
            gameClear={gameClear}
            gameOver={gameOver}
            onChangeInput={this.onChangeInput}
            onClickCheckButton={this.check}
          />
          <Typography align="center">選択済みのアルファベット</Typography>
          <Typography align="center">
            {selectedChar.map((c, i) => {
              return <span key={i}>{c.toUpperCase()}</span>;
            })}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
