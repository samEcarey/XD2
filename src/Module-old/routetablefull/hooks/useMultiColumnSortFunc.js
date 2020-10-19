import React from 'react'

export function useMultiColumnSortFunc(InitialTableData, state, dispatch){
    // handle table multicolumn sort
  function handleUserGearTableSetting(e, index) {
    const sortByCopy = [...state.sortBy]
    if(e.target.name == index) {
      sortByCopy[index] = {...sortByCopy[index],'direction': e.target.value} 
    } else {
      sortByCopy[index] = {...sortByCopy[index], [e.target.name]: e.target.value} 
    }
    dispatch({ sortBy: sortByCopy})
  }

  // handle table reset multicolumn sort
  function handleTableReset() {
    dispatch({ sortBy: state.tableData.table.columns.map(() => { return { column: '', direction:"asc"} })})
  }

  // handle multicolumn sort function
  function handleMulticolumnSort(e) {
    e.preventDefault()
    let arrayCopy = [...InitialTableData.table.rows]
    const sortColumn = state.sortBy.filter((s) => {
      return s.column !== ''
    })
    arrayCopy.sort(function(a, b) {
      
        if(state.sortBy[0].direction === 'asc') {
          if (a[state.sortBy[0].column] < b[state.sortBy[0].column]) {
            return -1;
          } else if (a[state.sortBy[0].column] > b[state.sortBy[0].column]) { 
              return 1;
          }
        } else {
          if (a[state.sortBy[0].column] < b[state.sortBy[0].column]) {
            return 1;
          } else if (a[state.sortBy[0].column] > b[state.sortBy[0].column]) { 
              return -1;
          }
        }
    
         // Else go to the other item
         for (var i = 1; i < sortColumn.length; i++) {
          if(state.sortBy[i].direction === 'asc') {
            if (a[state.sortBy[i].column] > b[state.sortBy[i].column]) { 
                return 1;
            } else if (a[state.sortBy[i].column] < b[state.sortBy[i].column]) {
                return -1
            } 
          } else {
            if (a[state.sortBy[i].column] < b[state.sortBy[i].column]) { 
              return 1;
            } else if (a[state.sortBy[i].column] > b[state.sortBy[i].column]) {
                return -1
            }
          } 
        }
    });
    state.tableData.table.rows = arrayCopy
    dispatch({ tableData: state.tableData})
  }

  return { handleUserGearTableSetting, handleMulticolumnSort, handleTableReset }
}