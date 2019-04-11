import React from 'react';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Table from './Table';

import Grid from '@material-ui/core/Grid';
function Charts() {
  return (
    <div>
      <div style={{ margin: 20, fontSize: 20 }}>
        <p>
          Les graphes ci-dessous représentent les répartitions des hommes et des femmes sur l'axe
          des catégories d'âge et leur connaissance concernant l'entreprice CTmotors
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
