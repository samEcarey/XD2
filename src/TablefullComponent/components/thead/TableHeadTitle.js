import React from "react";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { useTableState } from '../../context'
import {  useRowCheckboxFunc, useCollapseColumnFunc, useUserColumnGearFunc, useColumnCheckboxFunc } from '../../hooks'
import { TR, TH } from '../../styles'
import { ColumnModalSwitcher, DropdownSwitcher  } from '..'

export const TableHeadTitle = () => {
  
  const [state, dispatch] = useTableState();

  // Handle Rowcheckbox selection
  const { handleRowAllCheckBox } = useRowCheckboxFunc(state,dispatch)


  // Handle uset column gear setting
  const { handleGearColumn,handleGearResetColumn,handleGearColumnFilter } = useUserColumnGearFunc(state, dispatch)

  // Handle collpase column
  const { handleCollapseColumn } = useCollapseColumnFunc(state,dispatch)

  // column checkbox handle with freeze order
  const { handleColumnCheckBoxFields } = useColumnCheckboxFunc(state, dispatch)


  // Display columns 
  const displayColumns = state.tableData.table.columns.filter(column => {
    return column.hidden === false
  })
  return (
        <TR>
          {state.tableData.table.isCollapseRows ?
            <TH>###</TH>
          : null
          }
          {state.tableData.table.selectRow !== '' && state.tableData.table.selectRow === 'checkbox'
          ?
            <TH><input type="checkbox" name="name1" onChange={handleRowAllCheckBox} checked={state.rowHeaderCheckbox} /></TH>
          : state.tableData.table.selectRow !== '' && state.tableData.table.selectRow === 'radio' ?
            <TH></TH>
          : null
          }
          {displayColumns.map((column,index) => {
            return (
              <TH key={index} dragOver={column.name === state.dragOver} className={`${column.isCollapse ? state.expandedColumns.includes(column.name) ? 'expanded' : 'collapsed' : ''} ${column.checked ? `freeze freeze_${index}` : ''} ${column.name === state.dragColumn ? `dragcolumn` : ''} ${state.selectedGearColumn === column.name ? 'current_filter' : ''}`}>

                {state.tableData.table.isFreezeColumn ?
                  <input type="checkbox" name="name1" onChange={() => handleColumnCheckBoxFields(column, index)} checked={column.checked} />
                : null }
                  {column.isCollapse ?
                    state.expandedColumns.includes(column.name) ? 
                    <><FaAngleDoubleLeft  onClick={()=>handleCollapseColumn(column.name)}/> {column.headerText} </> : 
                    <div className="tooltip"><FaAngleDoubleRight onClick={()=>handleCollapseColumn(column.name)}/>
                      <span className="tooltiptext">{column.headerText}</span>
                    </div>
                  : column.headerText}

                {column.isUserGearColumnSetting === "modal" ?
                  <ColumnModalSwitcher 
                      columnGearFilter={state.columnGearFilter} 
                      handleGearColumn={handleGearColumn} 
                      handleResetColumn={handleGearResetColumn} 
                      handleColumnFilter={handleGearColumnFilter}
                      column={column} />
                  : column.isUserGearColumnSetting === "dropdown" ?
                  <DropdownSwitcher 
                    columnGearFilter={state.columnGearFilter} 
                    handleGearColumn={handleGearColumn} 
                    handleResetColumn={handleGearResetColumn} 
                    handleColumnFilter={handleGearColumnFilter}
                    column={column}
                  />
                  : null
                }
              </TH>
            )
          })}
          {state.tableData.table.deleteRow ?
            <TH>Action</TH>
          : null
          }
        </TR>
  )
};
