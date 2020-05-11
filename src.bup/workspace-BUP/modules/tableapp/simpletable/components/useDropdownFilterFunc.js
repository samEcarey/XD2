import React from 'react'
import { TableData } from '../../data/json/TableData'

const { InitialTableData } = TableData()

 export function useDropdownFilterFunc(state, dispatch){
  console.log(InitialTableData)
   // Column dropdown select change handle  
   function handleDropdownOptionChange(optionEvent, column){
    let tableDataCopy = [...InitialTableData.table.rows]
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
    dispatch({ tableData: {...state.tableData}})
  }

  // Column dropdown display select option
  function handleDropdownOptionList(column){
    
    const uniqueOptions = [];
    let tableDataCopy = [...InitialTableData.table.rows]
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
   
  return { handleDropdownOptionChange, handleDropdownOptionList }
}