import React from "react";
import { useSelector } from 'react-redux'
import { useGlobalState } from '../../context'
import {  usePaginationFunc } from '../../hooks'
import { TR, TH } from '../../styles'


export const TableFootPagination = () => {
  
  const [state, dispatch] = useGlobalState();

   // Get initial global state using redux data
   let InitialTableData = useSelector(state => state.tablefullReducer.tableData)

  // Handle Pagination 
  const { handleRecordPerPage, renderPerPageRecords, renderPageNumbers } = usePaginationFunc(state,dispatch)
  

  return (
    <TR>
      <TH>
        <select value={state.recordPerPage} onChange={(e) => handleRecordPerPage(e)}>
          <option value={InitialTableData.table.recordPerPage}>Records Per Page</option>
          {renderPerPageRecords()}
        </select>
      </TH>
      <TH>
        <ul id="page-numbers">
          {renderPageNumbers()}
        </ul>
      </TH>
    </TR>
  )
};
