import React from 'react';
import { Router, Link } from '@reach/router';
import NewVote from './components/NewVote';
import Table from './components/Table';
import Chart from './components/Chart';
import { Button, MuiThemeProvider } from '@material-ui/core';

import { buttonStyle, theme } from './utils/themes';

function Home() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px',
          backgroundColor: 'white',
          borderBottom: '1px solid #dddddd'
        }}
      >
        <img src="/img/logo-ctm.png" alt="logo" style={{ height: 50 }} />
        <div>
          <Link
            to="/new"
            style={{
              textDecoration: 'none'
            }}
          >
            <Button color="primary" size="large" style={buttonStyle}>
              Voter
            </Button>
          </Link>
        </div>
      </div>
      <Table />
      <Chart />
    </div>
  );
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Home path="/" />
        <NewVote path="/new" />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
