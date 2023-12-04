import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

import TableBody from './TableBody';
import TableHead from './TableHead';

import { useTableData } from '../hooks/useTableData';
import { getColumnsFromUserData } from '../utils';

import styles from './TableStyles';

const useStyles = createUseStyles(styles);

const Table = ({ users }) => {
  const classes = useStyles();

  const {
    tableData,
    columns,
    sortField,
    order,
    handleSorting,
    setSortField,
    setOrder,
  } = useTableData(users);

  return (
    <div className={classes.tableContainer}>
      {users.length > 0 ? (
        tableData && (
          <table className={classes.table}>
            <TableHead
              columns={columns}
              handleSorting={handleSorting}
              sortField={sortField}
              handleSetSortField={setSortField}
              order={order}
              handleSetOrder={setOrder}
            />
            <TableBody columns={columns} tableData={tableData} />
          </table>
        )
      ) : (
        <div className={classes.noUsers}>No user matches</div>
      )}
    </div>
  );
};

export default Table;
