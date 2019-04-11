import { ResponsiveBar } from '@nivo/bar';
import React from 'react';
import { useLocalStorage } from '../utils/hooks';
import { count, filter } from '../utils/operations';

const ages = [
  {
    key: '1',
    value: '25-30 ans'
  },
  {
    key: '2',
    value: '30-45 ans'
  },
  {
    key: '3',
    value: '45-60 ans'
  },
  {
    key: '4',
    value: 'Plus de 60 ans'
  }
];

function Chart2() {
  const [storage] = useLocalStorage('@ctm-voting', []);
  const ms = filter('sexe', 'm')(storage);
  const fs = filter('sexe', 'f')(storage);
  const ds = ages.map(x => {
    const countBy = count('age', x.key);
    return {
      Hommes: countBy(ms),
      Femmes: countBy(fs),
      age: x.value,
      HommesColor: '#54B648',
      FemmesColor: '#F08A1B'
    };
  });
  return (
    <ResponsiveBar
      data={ds}
      keys={['Hommes', 'Femmes']}
      indexBy="age"
      margin={{
        top: 50,
        right: 130,
        bottom: 50,
        left: 60
      }}
      padding={0.3}
      colors="accent"
      colorBy={({ id, data }) => data[`${id}Color`]}
      borderColor="inherit:darker(1.6)"
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Ages',
        legendPosition: 'middle',
        legendOffset: 32
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Nombre',
        legendPosition: 'middle',
        legendOffset: -40
      }}
      labelSkipWidth={12}
      labelSkipHeight={40}
      groupMode="grouped"
      labelTextColor="#f9f9f9"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1
              }
            }
          ]
        }
      ]}
    />
  );
}

export default Chart2;
