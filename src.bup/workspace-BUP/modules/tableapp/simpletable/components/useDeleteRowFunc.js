 export function useDeleteRowFunc(state, dispatch){
  // handle delete row
  function handleRowDel(row) {
    var newTableRows = state.tableData.table.rows
    var index = newTableRows.indexOf(row);
    newTableRows.splice(index, 1);
    state.tableData.table.rows = newTableRows
    dispatch({ tableData: state.tableData})
  }

  return { handleRowDel }
  
}