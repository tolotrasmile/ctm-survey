import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import { Router } from '@reach/router';
import NewVote from './components/NewVote';
import Charts from './components/Charts';
import Header from './components/Header';
import Home from './components/Home';
import { theme } from './utils/themes';
import 'react-circular-progressbar/dist/styles.css';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Header />
        <Router>
          <Home path="/" />
          <NewVote path="/new" />
          <Charts path="/charts" />
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
