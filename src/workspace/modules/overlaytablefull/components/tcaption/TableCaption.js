import React from "react";
import { useSelector } from 'react-redux'
import { useGlobalState } from '../../context'
import {  useMultiColumnSortFunc, useInsertRowFunc } from '../../hooks'
import { Caption } from '../../styles'
import { TableModalSwitcher  } from '../../components'
import { HelpModal } from '../helpmodal'

export const TableCaption = () => {
  
  const [state, dispatch] = useGlobalState();

   // Get initial global state using redux data
   let InitialTableData = useSelector(state => state.tablefullReducer.tableData)

  // Handle user global gear table options 
  const { handleUserGearTableSetting, handleMulticolumnSort, handleTableReset } = useMultiColumnSortFunc(InitialTableData, state,dispatch)

  // Handle inser new empty row
  const { handleInsertRow } = useInsertRowFunc(state, dispatch)
  
  const stateValue= {
    sortBy: state.sortBy,
    columns: state.displayColumns
  }

  const handleButton = () => {
    console.log(state)
  }

  return (
    <Caption>
      Tablefull Demo
      {state.tableData.table.isUserGearTableSetting ?
        <TableModalSwitcher
          stateValue={stateValue}
          handleChange={handleUserGearTableSetting} 
          handleSort={handleMulticolumnSort} 
          handleReset={handleTableReset}
        />
      : null
      }
      <button onClick={handleButton}>Submit</button> 
      {state.tableData.table.insertRow ?
      <button onClick={handleInsertRow}>Insert Row</button> 
      : null
      }

      <HelpModal />
      
  </Caption>
  )
};
