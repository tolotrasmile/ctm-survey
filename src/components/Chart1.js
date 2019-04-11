import { ResponsiveLine } from '@nivo/line';
import React from 'react';
import { useLocalStorage } from '../utils/hooks';
import { count, filter } from '../utils/operations';

function Chart() {
  const [storage] = useLocalStorage('@ctm-voting', []);

  const xs = [
    {
      key: 'no',
      value: 'Qui ne connaissent pas CTmotors'
    },
    {
      key: 'yes',
      value: 'Qui connaissent CTmotors'
    }
  ];

  const datas = [
    {
      id: 'Hommes',
      data: xs.map(a => ({
        x: a.value,
        y: count('identity', a.key)(filter('sexe', 'm')(storage))
      }))
    },
    {
      id: 'Femmes',
      data: xs.map(a => ({
        x: a.value,
        y: count('identity', a.key)(filter('sexe', 'f')(storage))
      }))
    }
  ];

  return (
    <ResponsiveLine
      data={datas}
      margin={{
        top: 50,
        right: 110,
        bottom: 50,
        left: 60
      }}
      xScale={{
        type: 'point'
      }}
      yScale={{
        type: 'linear',
        stacked: true,
        min: 'auto',
        max: 'auto'
      }}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle'
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle'
      }}
      dotSize={10}
      dotColor="inherit:darker(0.3)"
      dotBorderColor="#fff"
      dotBorderWidth={2}
      enableDotLabel={true}
      dotLabel="y"
      dotLabelYOffset={-12}
      animate={true}
      motionStiffness={90}
      colors="accent"
      curve="cardinal"
      stacked={false}
      motionDamping={15}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: 'rgba(0, 0, 0, .03)',
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  );
}

export default Chart;
