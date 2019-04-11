import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

let id = 0;
function createData(name, calories, fat, carbs) {
  id += 1;
  return { id, name, calories, fat, carbs };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3)
];

function List() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell align="center">HOMMES</TableCell>
          <TableCell align="center">FEMMES</TableCell>
          <TableCell align="center">TOTAL</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="center">{row.calories}</TableCell>
            <TableCell align="center">{row.fat}</TableCell>
            <TableCell align="center">{row.carbs}</TableCell>
          </TableRow>
        ))}
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="center">{row.calories}</TableCell>
            <TableCell align="center">{row.fat}</TableCell>
            <TableCell align="center">{row.carbs}</TableCell>
          </TableRow>
        ))}
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="center">{row.calories}</TableCell>
            <TableCell align="center">{row.fat}</TableCell>
            <TableCell align="center">{row.carbs}</TableCell>
          </TableRow>
        ))}
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="center">{row.calories}</TableCell>
            <TableCell align="center">{row.fat}</TableCell>
            <TableCell align="center">{row.carbs}</TableCell>
          </TableRow>
        ))}
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="center">{row.calories}</TableCell>
            <TableCell align="center">{row.fat}</TableCell>
            <TableCell align="center">{row.carbs}</TableCell>
          </TableRow>
        ))}
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="center">{row.calories}</TableCell>
            <TableCell align="center">{row.fat}</TableCell>
            <TableCell align="center">{row.carbs}</TableCell>
          </TableRow>
        ))}
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="center">{row.calories}</TableCell>
            <TableCell align="center">{row.fat}</TableCell>
            <TableCell align="center">{row.carbs}</TableCell>
          </TableRow>
        ))}
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="center">{row.calories}</TableCell>
            <TableCell align="center">{row.fat}</TableCell>
            <TableCell align="center">{row.carbs}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default List;
