import React from 'react'
import { TableData } from '../../data/json/TableData'
const { InitialTableData } = TableData()
 export function useSearchFunc(state, dispatch){
   
  function handleSearch(e, key){
    let arrayCopy = [...InitialTableData.table.rows]
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