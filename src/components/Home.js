import React from 'react';
import { useLocalStorage } from '../utils/hooks';
import numeral from 'numeral';

function Home() {
  const [storage] = useLocalStorage('@ctm-voting', []);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 100px)',
        flexDirection: 'column'
      }}
    >
      <p style={{ color: '#999' }}>Nombre de personnes qui ont participé au sondage</p>
      <div style={{ fontSize: 100, color: '#777', fontWeight: 100 }}>
        {numeral(storage.length).format('0,0')}
      </div>
    </div>
  );
}

export default Home;
