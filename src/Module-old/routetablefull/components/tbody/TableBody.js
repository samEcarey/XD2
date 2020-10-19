import React from "react";
import {  FaEdit, FaPlus, FaMinus } from "react-icons/fa";
import { TableData } from "../../constants";
import { useTableState } from '../../context'
import {  handleTableCellFormat, usePaginationFunc, useRowCheckboxFunc, useRowRadioFunc, useEditCellFunc, useDeleteRowFunc, useCollapseRowFunc } from '../../hooks'
import { TBody, TR, TD } from '../../styles'


export const TableBody = () => {
  
  const [state, dispatch] = useTableState();

  const { InitialTableData } = TableData();

  // Handle Pagination 
  const { currentPageRows } = usePaginationFunc(state,dispatch)

  // Handle Rowcheckbox selection
  const { handleRowCheckBoxFields } = useRowCheckboxFunc(state,dispatch)

  // Handle Radio for row selection
  const { handleRowRadioFields } = useRowRadioFunc(state,dispatch)

  // Handle Editable Cell
  const { enableEditTableCell, handleEditTableCell, disableEditTableCell } = useEditCellFunc(InitialTableData, state,dispatch)

  // Handle Delete Row 
  const { handleRowDel } = useDeleteRowFunc(state,dispatch)

  // Handle collapse/expand row details
  const { handleCollapseRow } = useCollapseRowFunc(state,dispatch)
  
  // Datatype numeric array
  const numericSet = ['currency','number', 'percent'];

  // Display columns 
  const displayColumns = state.tableData.table.columns.filter(column => {
    return column.hidden === false
  })


  return (
    <TBody>
      {currentPageRows.map((row,index) => {
        return (
          <>
        <TR key={index}> 
          {state.tableData.table.isCollapseRows  ?
            row.collapseDetails ?
              <TD><div onClick={()=>handleCollapseRow(row.key)}>{state.expandedRows.includes(row.key) ? <FaMinus/> : <FaPlus/>}</div></TD>
            : <TD></TD>
          : null
          }
          { state.tableData.table.selectRow !== '' && state.tableData.table.selectRow === 'checkbox' 
            ? <TD><input type="checkbox" name="name1" onChange={() => handleRowCheckBoxFields(row, index)} checked={state.rowCheckboxFields[index].checked} /></TD>
          : state.tableData.table.selectRow !== '' && state.tableData.table.selectRow === 'radio' ?
            <TD><input type="radio" name="name1" value={index} onChange={(e) => handleRowRadioFields(index)} checked={state.rowRadioFields === index} /></TD>
          : null
          }
          {displayColumns.map((column,index) => {
            return (
              <TD className={`${numericSet.indexOf(column.dataType) > -1 ? 'alignright' : ''} ${column.checked ? `freeze freeze_${index}` : ''} ${state.selectedGearColumn === column.name ? 'current_filter' : ''}`} key={index} onClick={()=>disableEditTableCell()} dragOver={column.name === state.dragOver}>
                {state.editCell === column.name+'_'+row.key ?
                    <input type='text' name={column.name} id={row.key} defaultValue={row[column.name]} onClick={(e) => { e.stopPropagation()}} onChange={(evt)=>handleEditTableCell(evt)} />
                :
                <> {column.isCollapse ? 
                      state.expandedColumns.includes(column.name) ?
                        handleTableCellFormat(column.dataType, column.formatString, column.precision, row[column.name]) 
                      : null
                    : handleTableCellFormat(column.dataType, column.formatString, column.precision, row[column.name])}
                </>
                }
                {state.tableData.table.editableCell ?
                  <span className="editicon" onClick={()=>enableEditTableCell(row.key, column.name)}><FaEdit/></span>
                : null}
              </TD>
            )
          })}
          {state.tableData.table.deleteRow ?
          <TD key={index}> 
            <input type="button" onClick={() => { if (window.confirm('Are you sure you wish to delete this row?')) handleRowDel(row) } } value="X"/>
          </TD>
          : null}
        </TR>

        {state.expandedRows.includes(row.key) ?
          <TR>
            <TD colSpan={displayColumns.length}>{row.collapseDetails}</TD>
          </TR>
        : null
        }
        </>
      )
      })}
    </TBody>
  )
};
