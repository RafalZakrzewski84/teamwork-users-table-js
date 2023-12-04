import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const TableHead = ({
  columns,
  sortField,
  handleSetSortField,
  order,
  handleSetOrder,
  handleSorting,
}) => {
  const handleSortingChange = accessor => {
    const sortOrder =
      accessor === sortField && order === 'asc' ? 'desc' : 'asc';
    handleSetSortField(accessor);
    handleSetOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor }) => {
          const cl =
            sortField === accessor && order === 'asc' ? (
              <FontAwesomeIcon icon={faArrowUp} />
            ) : sortField === accessor && order === 'desc' ? (
              <FontAwesomeIcon icon={faArrowUp} rotation={180} />
            ) : (
              ''
            );
          return (
            <th key={accessor} onClick={() => handleSortingChange(accessor)}>
              {label} {cl}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
