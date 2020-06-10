import React from "react";
import { useTableState } from '../../context';
import {  usePaginationFunc } from '../../hooks';
import { TR, TH } from '../../styles';


export const TableFootPagination = () => {
  
  const [state, dispatch] = useTableState();

  // Handle Pagination 
  const { handleRecordPerPage, renderPerPageRecords, renderPageNumbers } = usePaginationFunc(state,dispatch)

  return (
    <TR>
      <TH>
        <select value={state.recordPerPage} onChange={(e) => handleRecordPerPage(e)}>
          <option value={state.tableData.table.recordPerPage}>Records Per Page</option>
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
