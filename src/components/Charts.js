import React from 'react';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Table from './Table';

import Grid from '@material-ui/core/Grid';
function Charts() {
  return (
    <div>
      <div
        style={{
          margin: 20,
          position: 'absolute',
          bottom: 0,
          maxWidth: 300,
          left: 0,
          padding: 20,
          color: 'white',
          fontSize: 20,
          backgroundColor: 'rgb(84,182,72, 0.8)',
          borderRadius: 5
        }}
      >
        <p>
          Les graphes ci-dessus représentent les répartitions des hommes et des femmes sur l'axe des
          catégories d'âge et leur connaissance concernant l'entreprise <b>CTmotors</b>
        </p>
      </div>
      <Table />
      <Grid container spacing={8} style={{ marginRight: -10 }}>
        <Grid item xs={12} sm={6} style={{ height: 400 }}>
          <Chart2 />
        </Grid>
        <Grid item xs={12} sm={6} style={{ height: 400 }}>
          <Chart1 />
        </Grid>
      </Grid>
    </div>
  );
}

export default Charts;
