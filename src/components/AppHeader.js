import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export default function AppHeader() {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Title
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
