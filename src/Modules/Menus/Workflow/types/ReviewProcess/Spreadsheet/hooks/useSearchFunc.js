import React from 'react'
import { useSelector } from 'react-redux'

export function useSearchFunc(initialTableData,state, dispatch){
  function handleSearch(e, key){
    let arrayCopy = initialTableData.table.rows
    let searchString = (e.target.value).trim().toLowerCase()
    let searchRecords = arrayCopy.filter((row) => {
      return (
        row[key].toString().toLowerCase().match(searchString) 
      )
    })
    state.tableData.table.rows = searchRecords
    dispatch({ tableData: state.tableData})
  }
  return { handleSearch }
  
}