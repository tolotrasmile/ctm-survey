import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { useLocalStorage } from '../utils/hooks';

function List() {
  const [data] = useLocalStorage('@ctm-voting', []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="center">HOMMES</TableCell>
          <TableCell align="center">FEMMES</TableCell>
          <TableCell align="center">TOTAL</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="center">
            {data.reduce((a, b) => (b.data.sexe === 'm' ? a + 1 : a), 0)}
          </TableCell>
          <TableCell align="center">
            {data.reduce((a, b) => (b.data.sexe === 'f' ? a + 1 : a), 0)}
          </TableCell>
          <TableCell align="center">{data.length}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default List;
