/* eslint-disable no-unused-expressions */

import { ColumnProps, TableHeaderProps } from "./model";

const TableHeader = <T,>({ columns, columnSort, className = "", onSort }: TableHeaderProps<T>) => {
  const onRaisSort = (column: ColumnProps<T>) => {
    // event.preventDefault();
    if (columnSort) {
      const curColumnSort = { ...columnSort };
      if (curColumnSort.path === column.path) {
        curColumnSort.order = curColumnSort.order === "asc" ? "desc" : "asc";
      } else {
        if (column.path) curColumnSort.path = column.path;
        curColumnSort.order = "asc";
      }
      if (onSort) onSort(curColumnSort);
    }
  };
  const columnSortIcon = (column: ColumnProps<T>) => {
    if (!column.isSort) return;
    if (columnSort && column.path !== columnSort.path)
      return (
        <>
          <i className="sort-icon sort-asc" />
          <i className="sort-icon sort-desc" />
        </>
      );
    if (columnSort && columnSort.order === "asc") return <i className="sort-icon sort-asc" />;
    return <i className="sort-icon sort-desc" />;
  };

  // const th = column => (
  //   <th key={column.path || column.key} colSpan={column.child ? column.child.length : ""} rowSpan={!column.child ? 2 : 0}>
  //     {column.isSort && (
  //       <a href="/" className="d-flex align-items-center" onClick={e => onRaisSort(e, column.path)}>
  //         {!column.child && <span className="d-inline-flex flex-column mr-1">{columnSortIcon(column)}</span>}
  //         <span>{column.label}</span>
  //       </a>
  //     )}
  //     {!column.isSort && (
  //       <div className="d-flex align-items-center">
  //         <span>{column.label}</span>
  //       </div>
  //     )}
  //   </th>
  // );

  return (
    <thead>
      <tr className={`clickable ${className}`}>
        {columns.map(column => (
          <th key={column.path || column.key} onClick={() => onRaisSort(column)}>
            {column.label} {columnSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
