//import React from 'react'
//import { TableData } from '../../data/json/TableData'

 export function useUserColumnGearFunc(state, dispatch){
  
  // handle gear column function
  function handleGearColumn(e) {
    let columnFilter = {...state.columnGearFilter}
    columnFilter[e.target.name] = e.target.value;
    dispatch({ columnGearFilter: columnFilter})
  }

  // handle gear column reset function
  function handleGearResetColumn(e) {
    e.preventDefault()
    state.columnGearFilter[e.target.name] = e.target.value;
    dispatch({ columnGearFilter: state.columnGearFilter})
  }

  // handle gear column current selected highlight
  function handleGearColumnFilter(col) {
    dispatch({ selectedGearColumn: col})
  }

  return { handleGearColumn,handleGearResetColumn,handleGearColumnFilter }
  
}