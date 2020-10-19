import React from 'react'
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
 export function useColumnSortFunc(InitialTableData, state, dispatch){

   // handle column sort function
   function handleColumnSort(key){
    const { direction } = state.columnSort
    const orderDirection = key ? (direction === 'asc' ? 'desc' : direction === 'desc' ? '' : 'asc' ) : 'asc'
    let arrayCopy = [...InitialTableData.table.rows]
    if(orderDirection) {
      arrayCopy.sort(function(a,b) {
        if(a[key] < b[key]) return -1
        else return 0
      })
      if(orderDirection === 'desc') {
        arrayCopy.reverse()
      }
    }
    state.tableData.table.rows = arrayCopy
    dispatch({ tableData: state.tableData})
    dispatch({ columnSort: {column: key, direction:orderDirection}})
  }

  // handle display column sorting direction
  function handleColumnDirection(key){ 
    const {column, direction} = state.columnSort
    return direction === 'asc' && column === key 
          ? <FaSortUp/>
          : direction === 'desc' && column === key 
          ? <FaSortDown/>
          : <FaSort/>
  }

  return { handleColumnSort, handleColumnDirection }
}