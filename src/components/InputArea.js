import React from 'react';
import { Input, Button, Grid } from '@material-ui/core';

export default function InputArea(props) {
  const { inputChar, gameClear, gameOver } = props;

  return (
    <Grid container className="input-character-form" justify="center">
      <Grid item xs={3}>
        <Input
          type="text"
          inputProps={{ maxLength: 1 }}
          onChange={props.onChangeInput}
          value={inputChar}
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          color="primary"
          variant="contained"
          onClick={props.onClickCheckButton}
          style={{ marginLeft: '2rem' }}
          disabled={gameClear || gameOver}
        >
          CHECK
        </Button>
      </Grid>
    </Grid>
  );
}
