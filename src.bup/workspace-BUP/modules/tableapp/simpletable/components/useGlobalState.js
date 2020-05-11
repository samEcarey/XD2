import React from 'react'
import { TableData } from '../../data/json/TableData'

const { InitialTableData } = TableData()

const defaultGlobalState = {
  tableData: InitialTableData,
  rowHeaderCheckbox: false,
  rowCheckboxFields: InitialTableData.table.rows.map((d, i) => { return {checked: false, data: d} }),
  columnSort: {column: '',direction: ''},
  editCell: '',
  recordPerPage: InitialTableData.table.recordPerPage,
  currentPage: 1,
  expandedColumns: [],
  dragOver: '',
  sortBy: InitialTableData.table.columns.map(() => { return { column: '', direction:'asc'} } ),
  columnGearFilter: {},
  selectedGearColumn: ''
};

const globalStateContext = React.createContext(defaultGlobalState);
const dispatchStateContext = React.createContext(undefined);

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    (state, newValue) => ({ ...state, ...newValue }),
    defaultGlobalState
  );
  return (
    <globalStateContext.Provider value={state}>
      <dispatchStateContext.Provider value={dispatch}>
        {children}
      </dispatchStateContext.Provider>
    </globalStateContext.Provider>
  );
};

export const useGlobalState = () => [
  React.useContext(globalStateContext),
  React.useContext(dispatchStateContext)
];