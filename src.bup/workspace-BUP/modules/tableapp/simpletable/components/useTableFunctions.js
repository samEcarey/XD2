import React from 'react'
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { TableData } from '../../data/json/TableData'


export function useTableFunctions() {
  const [tableData, setTableData] = React.useState(TableData)
  const [headerCheckbox, setHeaderCheckbox] = React.useState(false)
  const [checkboxFields, setCheckboxFields] = React.useState(TableData.table.rows.map((d, i) => { return {checked: false, data: d} } ))
  const [sort, setSort] = React.useState({column: '',direction: ''})
  const [editCell, setEditCell] = React.useState('')
  const [recordPerPage, setRecordPerPage] = React.useState(TableData.table.recordPerPage)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [expandedColumns, setExpandedColumns] = React.useState([])
  const [dragOver, setDragOver] = React.useState('')
  const [sortBy, setSortBy] = React.useState(TableData.table.columns.map(() => { return { column: '', direction:'asc'} } ))
  const [columnGearFilter, setColumnGearFilter] = React.useState({})
  const [selectedGearColumn, setSelectedGearColumn] = React.useState('')
 
  // row header checkbox handle 
  function handleChangeAllCheckBox(){
    let newHeader = !headerCheckbox
    let newFields = checkboxFields.map((f) => {
      return {
        checked: newHeader,
        data: f.data
      }   
    })
    setCheckboxFields(newFields)
    setHeaderCheckbox(newHeader)
  }

  // row checkbox handle 
  function handleChangeCheckBoxFields(row, index){
    let newState = [...checkboxFields]
    newState[index] = {
        checked: !newState[index].checked,
        data: row
    }
    setCheckboxFields(newState)
  }


  // Column dropdown handle select option 
  function handleSelectOption(optionEvent, column){
    let tableDataCopy = TableData
    let searchString = optionEvent.target.value
    let searchRecords = tableDataCopy.table.rows.filter((row) => {
      return (
        searchString ?
          row[column].toString() === searchString
        :
          row
      )
    })
    setTableData(prevState => ({
      table: {
        ...prevState.table,
        rows: searchRecords
      }
    }))
  }

  // Column dropdown display select option
  function columnOptionList(column){
    const uniqueOptions = [];
    TableData.table.rows.map(row => {
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
  
  // handle sort function
  function handleSort(key){
    const { direction } = sort
    const orderDirection = key ? (direction === 'asc' ? 'desc' : direction === 'desc' ? '' : 'asc' ) : 'asc'
    let arrayCopy = [...TableData.table.rows]
    if(orderDirection) {
      arrayCopy.sort(function(a,b) {
        if(a[key] < b[key]) return -1
        else return 0
      })
      if(orderDirection === 'desc') {
        arrayCopy.reverse()
      }
    }
    setTableData(prevState => ({
      table: {
        ...prevState.table,
        rows: arrayCopy
      }
    }))
    setSort({column: key, direction:orderDirection})
  }

  // handle display sorting direction
  function handleDirection(key){ 
    const {column, direction} = sort
    return direction === 'asc' && column === key 
          ? <FaSortUp/>
          : direction === 'desc' && column === key 
          ? <FaSortDown/>
          : <FaSort/>
  }

  // handle delete row
  function handleRowDel(row) {
    var newTableRows = TableData.table.rows
    var index = newTableRows.indexOf(row);
    newTableRows.splice(index, 1);
    setTableData(prevState => ({
        table: {
          ...prevState.table,
          rows: newTableRows
        }
      }
    ))
  };

  // Allow to edit cell
  function enableEditableCell(id,col){  
    if(TableData.table.editableCell) {
      setEditCell(col+'_'+id)
    } 
  }

  // handle editable cell 
  function handleEditTableCell(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var tableDataRows = [...TableData.table.rows.slice()]
    var newTableDataRows = tableDataRows.map(function(row) {
      if (row.key === item.id) {
        row[item.name] = item.value;
      }
      return row;
    });
    console.log(newTableDataRows)
    setTableData(prevState => ({
      table: {
        ...prevState.table,
        rows: newTableDataRows
      }
    }))
  }

  // Disable editable cell
  function disableEditableCell(e) {
    if(editCell) {
      setEditCell('')
    } 
  }

  // handle records per page change event 
  function handleRecordPerPage(event) {
    setCurrentPage(Number(1))
    setRecordPerPage(Number(event.target.value))
  }

  // Logic for displaying per page records numbers
  const perpageRecords = [];
  for (let i = 1; i <= Math.ceil(tableData.table.rows.length); i++) {
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
  for (let i = 1; i <= Math.ceil(tableData.table.rows.length / recordPerPage); i++) {
    pageNumbers.push(i)
  }

  // Pagination click event
  function handlePageClick(event) {
    setCurrentPage(Number(event.target.id))
  }

  function renderPageNumbers() {
    return pageNumbers.map(number => {
      return (
        <li key={number} className={(number === currentPage) ? 'active' : ''} id={number} onClick={(e) => handlePageClick(e)}>
          {number}
        </li>
      )
    })
  }

  // Logic for displaying table records 
  const indexOfLastRecord = currentPage * recordPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordPerPage;
  const currentPageRows = tableData.table.rows.slice(indexOfFirstRecord, indexOfLastRecord);

  // handle collapse column
  function handleCollapseColumn(colId){
    const currentExpandedColumns = expandedColumns;
    const isRowCurrentlyExpanded = currentExpandedColumns.includes(colId);
    
    const newExpandedColumns = isRowCurrentlyExpanded ? 
      currentExpandedColumns.filter(id => id !== colId) : 
      currentExpandedColumns.concat(colId);
    
    setExpandedColumns(newExpandedColumns);
  }

  // Reorder functions
  function handleDragStart(e) {
    const { id } = e.target;
    const idx = tableData.table.columns.findIndex(col => col.name === id);
    if(idx >= 0) {
      e.dataTransfer.setData('colIdx', idx);
      e.target.style.cursor = 'move'; 
    }
  }

  function handleDragOver(e) { 
    e.preventDefault() 
  }

  function handleDragEnter(e) {
    const { id } = e.target;
    e.target.style.cursor = 'move'; 
    setDragOver(id)
  }

  function handleOnDrop(e) {
    const columns = tableData.table.columns
    const { id } = e.target;
    e.target.style.cursor = 'move'; 
    const droppedColIdx = tableData.table.columns.findIndex(col => col.name === id);
    const draggedColIdx = e.dataTransfer.getData('colIdx');
    const tempCols = [...columns];
    
    tempCols[draggedColIdx] = columns[droppedColIdx];
    tempCols[droppedColIdx] = columns[draggedColIdx];
    if(droppedColIdx >= 0){
      setTableData(prevState => ({
        table: {
          ...prevState.table,
          columns: tempCols
        }
      })) 
    }
    
    setDragOver('')
  }

  // handle table multicolumn sort
  function handleUserGearTableSetting(e, index) {
    const sortByCopy = [...sortBy]
    if(e.target.name == index) {
      sortByCopy[index] = {...sortByCopy[index],'direction': e.target.value} 
    } else {
      sortByCopy[index] = {...sortByCopy[index], [e.target.name]: e.target.value} 
    }
    setSortBy(sortByCopy)
  }

  // handle table reset multicolumn sort
  function handleTableReset() {
    setSortBy(tableData.table.columns.map(() => { return { column: '', direction:"asc"} }))
  }

  // handle multicolumn sort function
  function handleMulticolumnSort(e) {
    e.preventDefault()
    let arrayCopy = [...TableData.table.rows]
    const sortColumn = sortBy.filter((s) => {
      return s.column !== ''
    })
    arrayCopy.sort(function(a, b) {
      
        if(sortBy[0].direction === 'asc') {
          if (a[sortBy[0].column] > b[sortBy[0].column]) {
            return 1;
          } else if (a[sortBy[0].column] < b[sortBy[0].column]) { 
              return -1;
          }
        } else {
          if (a[sortBy[0].column] < b[sortBy[0].column]) {
            return 1;
          } else if (a[sortBy[0].column] > b[sortBy[0].column]) { 
              return -1;
          }
        }
    
         // Else go to the other item
         for (var i = 1; i < sortColumn.length; i++) {
          if(sortBy[i].direction === 'asc') {
            if (a[sortBy[i].column] > b[sortBy[i].column]) { 
                return 1;
            } else if (a[sortBy[i].column] < b[sortBy[i].column]) {
                return -1
            } 
          } else {
            if (a[sortBy[i].column] < b[sortBy[i].column]) { 
              return 1;
            } else if (a[sortBy[i].column] > b[sortBy[i].column]) {
                return -1
            }
          } 
        }
    });
    setTableData(prevState => ({
      table: {
        ...prevState.table,
        rows: arrayCopy
      }
    }))
  }

  // handle gear column function
  function handleGearColumn(e) {
    let columnFilter = {...columnGearFilter}
    columnFilter[e.target.name] = e.target.value;
    setColumnGearFilter(columnFilter)
  }

  // handle gear column reset function
  function handleGearResetColumn(e) {
    e.preventDefault()
    columnGearFilter[e.target.name] = e.target.value;
    setColumnGearFilter(columnGearFilter)
  }

  // handle gear column current selected highlight
  function handleGearColumnFilter(col) {
    setSelectedGearColumn(col)
  }
  

  return { 
    tableData, headerCheckbox, checkboxFields, handleChangeAllCheckBox, 
    handleChangeCheckBoxFields, handleSelectOption, 
    columnOptionList, handleSort, handleDirection, handleRowDel, 
    enableEditableCell, handleEditTableCell, editCell, disableEditableCell,
    handleRecordPerPage, renderPerPageRecords, renderPageNumbers, currentPageRows, recordPerPage,
    handleCollapseColumn, expandedColumns,
    handleDragStart, handleDragOver, handleDragEnter, handleOnDrop, dragOver,
    handleUserGearTableSetting, sortBy, handleTableReset, handleMulticolumnSort,
    handleGearColumn,handleGearResetColumn,handleGearColumnFilter, columnGearFilter, selectedGearColumn 
  }
}