import { useEffect, useState } from 'react';

import { getColumnsFromUserData } from '../utils';

export function useTableData(data) {
  const [tableData, setTableData] = useState(data);
  const [columns, setColumns] = useState([]);
  const [sortField, setSortField] = useState('');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    setTableData(data);
    setSortField('');
    setOrder('asc');

    if (data.length > 0) {
      const columns = getColumnsFromUserData(data[0]);
      setColumns(columns);
    }
  }, [data]);

  const handleSorting = (sortField, sortOrder) => {
    if (!sortField) return;
    const sorted = [...tableData].sort((a, b) => {
      if (!a[sortField]) return 1;
      if (!b[sortField]) return -1;
      if (a[sortField] === null && b[sortField] === null) return 0;
      return (
        a[sortField].toString().localeCompare(b[sortField].toString(), 'en', {
          numeric: true,
        }) * (sortOrder === 'asc' ? 1 : -1)
      );
    });
    setTableData(sorted);
  };

  return {
    tableData,
    columns,
    sortField,
    order,
    handleSorting,
    setSortField,
    setOrder,
  };
}
