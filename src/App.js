// @ts-check
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

import AppHeader from './components/AppHeader';
import GamePanel from './components/GamePanel';

import './App.css';

// 辞書サイトからスクレイピング
// 英語APIサーバ
// 英語ゲーム
// selenium

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container justify="center">
          <Grid item xs={12}>
            <AppHeader />
          </Grid>
          <Grid item xs={11} sm={6}>
            <GamePanel />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
