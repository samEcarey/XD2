import React from 'react'

const defaultGlobalState = {
  tableData: {
    table:{
      rows: [],
      columns: []
    }
  }, // InitialTableData
  currentPage: 1,
  recordPerPage: '',  // InitialTableData.table.recordPerPage
  columnSort: { column: '', direction: '' },
  dragOver: '',
  rowHeaderCheckbox: false,
  rowCheckboxFields: [], //InitialTableData.table.rows.map((d,i) => { return { checked: false, data:d }}),
  rowRadioFields: '',
  editCell: '',
  expandedColumns: [],
  sortBy: [], //InitialTableData.table.columns.map(() => { return { column: '', direction:'asc'} } ),
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