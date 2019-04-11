import React from 'react';
import { Button } from '@material-ui/core';
import { Link, navigate } from '@reach/router';
import { buttonStyle } from '../utils/themes';

function Header(params) {
  return (
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
      <img
        src="/img/logo-ctm.png"
        alt="logo"
        style={{ height: 30, padding: 10, cursor: 'pointer' }}
        onClick={() => navigate('/')}
      />
      <div style={{ display: 'flex' }}>
        <Link
          to="/charts"
          style={{
            textDecoration: 'none'
          }}
        >
          <Button color="primary" size="large" style={buttonStyle}>
            Graphes
          </Button>
        </Link>
        <Link
          to="/new"
          style={{
            textDecoration: 'none',
            marginLeft: 10
          }}
        >
          <Button color="primary" size="large" style={buttonStyle}>
            Participer
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
