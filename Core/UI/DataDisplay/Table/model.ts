export interface ColumnProps<T> {
  label: string;
  path?: string;
  key?: string;
  isSort?: boolean;
  content?: (cell: T) => void;
}
export interface ColumnSort {
  path: string;
  order: "asc" | "desc";
}

export interface TableProps<T> {
  columns: ColumnProps<T>[];
  onSort?: (curColumnSort: ColumnSort) => void;
  columnSort?: ColumnSort;
  data: T[] | undefined;
  className?: string;
}

export interface TableBodyProps<T> {
  columns: ColumnProps<T>[];
  data: T[] | undefined;
  className?: string;
}

export interface TableHeaderProps<T> {
  columns: ColumnProps<T>[];
  onSort?: (curColumnSort: ColumnSort) => void;
  columnSort?: ColumnSort;
  className?: string;
}
