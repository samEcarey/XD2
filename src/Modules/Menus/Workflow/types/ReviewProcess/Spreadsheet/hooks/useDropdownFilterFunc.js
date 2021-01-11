import React from 'react'

 export function useDropdownFilterFunc(initialTableData,state, dispatch){
   // Column dropdown select change handle  
   function handleDropdownOptionChange(optionEvent, column){
    let tableDataCopy = initialTableData.table.rows
    let searchString = optionEvent.target.value
    let searchRecords = tableDataCopy.filter((row) => {
      return (
        searchString ?
          row[column].toString() === searchString
        :
          row
      )
    })
    state.tableData.table.rows = searchRecords
    dispatch({ tableData: state.tableData})
  }

  // Column dropdown display select option
  function handleDropdownOptionList(column){
    
    const uniqueOptions = [];
    let tableDataCopy = initialTableData.table.rows
    tableDataCopy.map(row => {
        if (uniqueOptions.indexOf(row[column]) === -1) {
          uniqueOptions.push(row[column])
        }
    });
    return uniqueOptions.map((option, index) => {
      return(
        <option key={index} value={option}>{option}</option>
      )
    })
  }

  // Handle dropdown range filter
  function handleDropdownRange(optionEvent, column) {
    let tableDataCopy = initialTableData.table.rows
    let searchString = optionEvent.target.value
    let searchRange = searchString.split('-')
    let searchRecords = tableDataCopy.filter((row) => {
      return (
        searchString ?
          //row[column].toString() === searchString
          row[column] >= searchRange[0] && row[column] <= searchRange[1]
        :
          row
      )
    })
    state.tableData.table.rows = searchRecords
    dispatch({ tableData: state.tableData})
  }

  return { handleDropdownOptionChange, handleDropdownOptionList, handleDropdownRange }
}