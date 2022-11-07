import "./table.css";

import React from "react";

import { TableProps } from "./model";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = <TableData,>({ columns, onSort, columnSort, data, className = "" }: TableProps<TableData>) => (
  <table className={`${className} table `}>
    <TableHeader columns={columns} onSort={onSort} columnSort={columnSort} />
    <TableBody data={data} columns={columns} />
  </table>
);

export default Table;
