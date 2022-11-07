import _ from "lodash";
import React from "react";

import { ColumnProps, TableBodyProps } from "./model";

const TableBody = <T,>({ data, columns, className }: TableBodyProps<T>) => {
  const cellContent = (item: T, column: ColumnProps<T>): any => {
    if (column.content) {
      return column.content(item);
    }
    return column.path && _.get(item, column.path);
  };

  const cellKey = (column: ColumnProps<T>) => (column?.key ? column?.key : column?.path);

  // const td = (item, column, index) => (
  //   <td key={cellKey(item, column)} data-label={column.label} className={className}>
  //     {cellContent(item, column, index)}
  //   </td>
  // );
  return (
    <tbody>
      {data &&
        data.map((item, i) => (
          <tr key={i}>
            {columns.map(column => (
              <td className={className} key={cellKey(column)}>
                {cellContent(item, column)}
              </td>
            ))}
          </tr>
        ))}
    </tbody>
  );
};

export default TableBody;
