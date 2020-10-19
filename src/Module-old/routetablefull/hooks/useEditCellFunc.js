import React from 'react'
export function useEditCellFunc(InitialTableData, state, dispatch){

  // Allow to edit cell
  function enableEditTableCell(id,col){  
    state.editCell === '' ?
    dispatch({ editCell: col+'_'+id})
    : dispatch({ editCell: ''})
  }

  // handle editable cell 
  function handleEditTableCell(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var tableDataRows = [...InitialTableData.table.rows.slice()]
    var newTableDataRows = tableDataRows.map(function(row) {
      if (row.key === item.id) {
        row[item.name] = item.value;
      }
      return row;
    });
    state.tableData.table.rows = newTableDataRows
    dispatch({ tableData: state.tableData})
  }

  // Disable editable cell
  function disableEditTableCell(e) {
    if(state.editCell) {
      dispatch({ editCell: ''})
    } 
  }
  
  return { enableEditTableCell, handleEditTableCell, disableEditTableCell }
}