import React from 'react'

 export function usePaginationFunc(state, dispatch){
  
  // handle records per page change event 
  function handleRecordPerPage(event) {
    dispatch({ currentPage: Number(1)})
    dispatch({ recordPerPage: Number(event.target.value)})
  }

  // Logic for displaying per page records numbers
  const perpageRecords = [];
  for (let i = 1; i <= Math.ceil(state.tableData.table.rows.length); i++) {
    if(i % 2 === 0) {
      perpageRecords.push(i)
    }
  }

  function renderPerPageRecords() {
    return perpageRecords.map(number => {
      return (
        <option key={number} value={number}>{number}</option>
      )
    })
  }

  // Logic for displaying pagination page numbers
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(state.tableData.table.rows.length / state.recordPerPage); i++) {
    pageNumbers.push(i)
  }

  // Pagination click event
  function handlePageClick(event) {
    dispatch({ currentPage: Number(event.target.id)})
  }

  function renderPageNumbers() {
    return pageNumbers.map(number => {
      return (
        <li key={number} className={(number === state.currentPage) ? 'active' : ''} id={number} onClick={(e) => handlePageClick(e)}>
          {number}
        </li>
      )
    })
  }

  // Logic for displaying table records 
  const indexOfLastRecord = state.currentPage * state.recordPerPage;
  const indexOfFirstRecord = indexOfLastRecord - state.recordPerPage;
  const currentPageRows = state.tableData.table.rows.slice(indexOfFirstRecord, indexOfLastRecord);

  return { handleRecordPerPage, renderPerPageRecords, renderPageNumbers, currentPageRows }
  
}