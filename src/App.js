import React from 'react';
import { Router, Link } from '@reach/router';
import NewVote from './components/NewVote';

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column'
      }}
    >
      <img src="/img/logo-ctm.png" alt="logo" style={{ height: 100, marginBottom: 20 }} />
      <Link
        to="/new"
        style={{
          fontFamily: 'sans-serif',
          padding: 10,
          backgroundColor: '#58AB27',
          color: 'white',
          textDecoration: 'none',
          textTransform: 'uppercase',
          borderRadius: 6
        }}
      >
        Voter
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Home path="/" />
      <NewVote path="/new" />
    </Router>
  );
}

export default App;
