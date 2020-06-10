export function useInsertRowFunc(state, dispatch){

  function handleInsertRow() {
    var id = (state.tableData.table.rows).length + 1;
    var row = {
      key: String(id),
    }
    state.tableData.table.columns.map((column) => {
      row[column.name] =  ""
    })
    state.tableData.table.rows.push(row)
    dispatch({ tableData: state.tableData})
  }

  return { handleInsertRow  }
}