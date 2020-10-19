import React from 'react';
import {  TableData } from "../constants";

const { InitialTableData } = TableData();

const defaultTablefullState = {
  tableData: InitialTableData,
  displayColumns: InitialTableData.table.columns.filter(column => {return column.hidden === false}),
  currentPage: 1,
  recordPerPage: InitialTableData.table.recordPerPage,
  columnSort: { column: '', direction: '' },
  dragOver: '',
  rowHeaderCheckbox: false,
  rowCheckboxFields: InitialTableData.table.rows.map((d,i) => { return { checked: false, data:d }}),
  rowRadioFields: '',
  editCell: '',
  expandedColumns: [],
  expandedRows: [],
  sortBy: InitialTableData.table.columns.map(() => { return { column: '', direction:'asc'} } ),
  columnGearFilter: {},
  selectedGearColumn: '',
  contextMenu : [
    {"label":"Item 1", "callback": true},
    {"label":"Menu item 2"},
    {"label":"Apple"},
    {"label":"This is orange"},
    {"label":"Conetxt menu is fun"},
    {"label":"Cool"}],
  contextVisible: false,
  contextX: 0,
  contextY: 0
};

const globalStateContext = React.createContext(defaultTablefullState);
const dispatchStateContext = React.createContext(undefined);


export const TablefullStateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    (state, newValue) => ({ ...state, ...newValue }),
    defaultTablefullState
  );
  return (
    <globalStateContext.Provider value={state}>
      <dispatchStateContext.Provider value={dispatch}>
        {children}
      </dispatchStateContext.Provider>
    </globalStateContext.Provider>
  );
};

export const useTableState = () => [
  React.useContext(globalStateContext),
  React.useContext(dispatchStateContext)
];