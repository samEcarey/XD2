import React from 'react'
import styled from 'styled-components'
import { FaAngleDoubleRight, FaAngleDoubleLeft, FaEdit } from "react-icons/fa";
import { Table, Caption, THead, TFoot, TBody, TR, TH, TD } from '../components'
import { handleTableCellFormat, handleResizableColumnsFunc, TableModalSwitcher, ColumnModalSwitcher, handleSelectionRowsFunc, handleSelectionCellsFunc } from './components'
import { useGlobalState, useSearchFunc, useRowCheckboxFunc, useColumnCheckboxFunc, useDropdownFilterFunc, useColumnSortFunc, useDeleteRowFunc, useEditCellFunc, usePaginationFunc, useCollapseColumnFunc, useColumnReorderFunc, useMultiColumnSortFunc, useUserColumnGearFunc } from './components'

export const SimpleTable = () => {
 
  const [state, dispatch] = useGlobalState();

  // Search handle
  const { handleSearch } = useSearchFunc(state, dispatch)
  // Row checkbox handle
  const { handleRowAllCheckBox, handleRowCheckBoxFields } = useRowCheckboxFunc(state, dispatch)
  // column checkbox handle with freeze order
  const { handleColumnCheckBoxFields, heandleFreezeColumn } = useColumnCheckboxFunc(state, dispatch)
  
  // Column dropdown filter handle
  const { handleDropdownOptionChange, handleDropdownOptionList } = useDropdownFilterFunc(state, dispatch)
  // Column sort filter handle
  const { handleColumnSort, handleColumnDirection } = useColumnSortFunc(state, dispatch)
  // Delete row handle
  const { handleRowDel } = useDeleteRowFunc(state, dispatch)
  // Handle edit cell
  const { enableEditTableCell, handleEditTableCell, disableEditTableCell } = useEditCellFunc(state, dispatch)
  // Handle pagination
  const { handleRecordPerPage, renderPerPageRecords, renderPageNumbers, currentPageRows } = usePaginationFunc(state, dispatch)
  // Handle Collapse Column
  const { handleCollapseColumn } = useCollapseColumnFunc(state, dispatch)
  // Handle column reorder
  const { handleDragStart, handleDragOver, handleDragEnter, handleOnDrop } = useColumnReorderFunc(state, dispatch)
  // Handle uset table gear setting - multicolumn sort
  const { handleUserGearTableSetting, handleMulticolumnSort, handleTableReset} = useMultiColumnSortFunc(state, dispatch)
  // Handle uset column gear setting
  const { handleGearColumn,handleGearResetColumn,handleGearColumnFilter } = useUserColumnGearFunc(state, dispatch)
  
  

  React.useEffect(() => {
    handleResizableColumnsFunc();
    if(state.tableData.table.isSelection === 'rows') {
      handleSelectionRowsFunc();
    } 
    if(state.tableData.table.isSelection === 'cells') {
      handleSelectionCellsFunc();
    }
    if(state.tableData.table.isFreezeColumn){
      heandleFreezeColumn()
    }
  },[]);
  
  const numericSet = ["number", "currency", "percent"]
  const displayColumn = state.tableData.table.columns.filter(column => {
    return column !== undefined ? column.hidden === false : null
  }) 
  const stateValue= {
    sortBy: state.sortBy,
    columns: displayColumn
  }

  return (
    <StyleTable className={state.tableData.table.fixedHeader ? "fixed-table" : "" }>
      <Table id="table">
        <Caption>
          Full Table
          {state.tableData.table.isUserGearTableSetting ?
            <TableModalSwitcher 
              stateValue={stateValue}
              handleChange={handleUserGearTableSetting} 
              handleSort={handleMulticolumnSort} 
              handleReset={handleTableReset}
            />
          : null
          }
        </Caption>
        <THead>
          <TR>
            {state.tableData.table.selectRow 
            ?
              <TH><input type="checkbox" name="name1" onChange={handleRowAllCheckBox} checked={state.rowHeaderCheckbox} /></TH>
            : null
            }
            {displayColumn.map((column, index) => {
              return ( 
                column.hidden === false ?
                  column.isCollapse ?
                  <TH key={index} className={state.expandedColumns.includes(column.name) ? 'expanded' : 'collapsed'}
                      id={column.name}
                      draggable
                      onDragStart={handleDragStart}
                      onDragOver={handleDragOver}
                      onDrop={handleOnDrop}
                      onDragEnter={handleDragEnter}
                      dragOver={column.name === state.dragOver}                   
                  >
                    {state.expandedColumns.includes(column.name) ? 
                        <><FaAngleDoubleLeft  onClick={()=>handleCollapseColumn(column.name)}/> {column.headerText} {column.isSortable && <span onClick={()=>handleColumnSort(column.name)}>{handleColumnDirection(column.name)}</span>}</> : 
                        <div className="tooltip"><FaAngleDoubleRight onClick={()=>handleCollapseColumn(column.name)}/>
                          <span className="tooltiptext">{column.headerText}</span>
                        </div>
                    }

                    {column.isUserGearColumnSetting ?
                      <ColumnModalSwitcher 
                        columnGearFilter={state.columnGearFilter} 
                        handleGearColumn={handleGearColumn} 
                        handleResetColumn={handleGearResetColumn} 
                        handleColumnFilter={handleGearColumnFilter}
                        column={column.name} />
                    : null
                    }
                  

                  </TH>
                :
                  <TH key={index}
                      id={column.name}
                      draggable
                      onDragStart={handleDragStart}
                      onDragOver={handleDragOver}
                      onDrop={handleOnDrop}
                      onDragEnter={handleDragEnter}
                      dragOver={column.name === state.dragOver}  
                      className={column.checked ? `freeze freeze_${index}` : ''}
                  >
                    {column.headerText} {column.isSortable && <span onClick={()=>handleColumnSort(column.name)}>{handleColumnDirection(column.name)}</span>}
                     {state.tableData.table.isFreezeColumn ?
                      <input type="checkbox" name="name1" onChange={() => handleColumnCheckBoxFields(column, index)} checked={column.checked} />
                     : null }
                    {column.isUserGearColumnSetting ?
                      <ColumnModalSwitcher 
                        columnGearFilter={state.columnGearFilter} 
                        handleGearColumn={handleGearColumn} 
                        handleResetColumn={handleGearResetColumn} 
                        handleColumnFilter={handleGearColumnFilter}
                        column={column.name} />
                    : null
                    }
                  </TH>
                : null
              )
            })}
             {state.tableData.table.deleteRow ?
                <TH> 
                  Action
                </TH>
              : null}
          </TR>
          <TR>
            {state.tableData.table.selectRow 
            ?
              <TH></TH>
            : null
            }
            {displayColumn.map((column, index) => {
              return(
                column.isSearchable ?
                  ( <TH key={index}><input type="search" name={column.name} onChange={(e) => handleSearch(e, column.name)} /></TH> )
                : column.isSelectDropDown ?
                  (<TH key={index}>
                    <select onChange={(e) => handleDropdownOptionChange(e, column.name)}>
                      <option value="">Choose Option</option>
                      {handleDropdownOptionList(column.name)}
                    </select>
                  </TH>)
                : ( <TH key={index}></TH> )
              )
            })}
            {state.tableData.table.deleteRow 
            ?
              <TH></TH>
            : null
            }
          </TR>
          
        </THead>
        <TBody>
          {currentPageRows.map((row, index) => {
            return ( 
              <TR key={row.key}>
                {state.tableData.table.selectRow 
                ? <TD><input type="checkbox" name="name1" onChange={() => handleRowCheckBoxFields(row, index)} checked={state.rowCheckboxFields[index].checked} /></TD>
                : null}
                {displayColumn.map((column, index) => {
                  return (
                    <TD key={index} className={numericSet.indexOf(column.dataType) > -1 ? 'rightalign' : column.checked ? `freeze freeze_${index}` : ''} onClick={(e)=>disableEditTableCell(e)} onDoubleClick={()=>enableEditTableCell(row.key, column.name)} dragOver={column.name === state.dragOver}>
                      {state.editCell === column.name+'_'+row.key ?
                        <input type='text' name={column.name} id={row.key} defaultValue={row[column.name]} onClick={(e) => { e.stopPropagation()}} onChange={(evt)=>handleEditTableCell(evt)} />
                      : <> {column.isCollapse ? 
                              state.expandedColumns.includes(column.name) ?
                                handleTableCellFormat(column.dataType, column.formatString, column.precision, row[column.name]) 
                              : null
                            : handleTableCellFormat(column.dataType, column.formatString, column.precision, row[column.name])}
                        </>
                      }
                    </TD>
                  )
                })}
                {state.tableData.table.deleteRow ?
                <TD key={index}> 
                  <input type="button" onClick={() => { if (window.confirm('Are you sure you wish to delete this row?')) handleRowDel(row) } } value="X"/>
                </TD>
                : null}
              </TR>
            )
          })}
        </TBody>
        {state.tableData.table.showFooter ?
          <TFoot>
            <TR>
              <TH colSpan={displayColumn.length}>(c) footer</TH>
            </TR>
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
          </TFoot>
          : null
        }
      </Table>
    </StyleTable>
  )
}

const StyleTable = styled.div`
  label {
    display: inline-block;
  }
  input {
    color: white;
  }
  svg {
    cursor: pointer;
  }
  th {
    cursor: move; 
  }
  tr.selected, td.selected {
    background-color: Green;
  }
  /* number text display right */
  td,th {
    border: 0.1rem solid #e1e1e1;
    text-align: left;
    &.rightalign {
      text-align: right;
    }
  }
  /* fixed header style */
  &.fixed-table {
    table-layout:fixed;
    
    tr {
      display:table;
      width:100%;
      table-layout:fixed;
    }
    thead, tfoot {
      display:table;
      width:100%;
      width:calc(100% - 18px);
    }
    tbody {
      height:300px;
      overflow:auto;
      overflow-x:hidden;
      display:block;
      width:100%;
    }
  }
  /* pagination style */
  ul#page-numbers {
    display: flex;
    list-style: none;
    li{
      padding: 10px;
      cursor: pointer;
    }
  }
  /* collapse column */
  table {
    table-layout: fixed;
  }
  th {
    width: 150px;
    transition: all 0.1s;
  }
  thead tr th.collapsed {
    width: 50px;
  }

  /* Tooltip container */
  .tooltip {
    cursor: pointer;
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
  }
  
  /* Tooltip text */
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
  
    /* Position the tooltip text */
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
  
    /* Fade in tooltip */
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  /* Tooltip arrow */
  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
  
  /* Show the tooltip text when you mouse over the tooltip container */
  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  // overflow-x: scroll;
  // width: 400px;
  // table {
  //   table-layout: fixed;
  // }
  // td, th {
  //   width: 100px;
  // }
  .freeze {
    position: sticky !important;
    background-color: green;
  }
  .freeze_0 {
    left: 0px;
  }
  .freeze_1 {
    left: 100px;
  }
  .freeze_2 {
    left: 200px;
  }
  .freeze_3 {
    left: 300px;
  }
  .freeze_4 {
    left: 400px;
  }
  
` 
