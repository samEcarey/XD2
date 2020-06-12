import React from "react";
import { FaArrowsAlt } from "react-icons/fa";
import { useTableState } from '../../context'
import {  useColumnReorderFunc } from '../../hooks'
import { TR, TH } from '../../styles'

export const TableHeadReorder = () => {
  
  const [state, dispatch] = useTableState();

  // Handle Column reorder
  const { handleDragStart, handleDragOver, handleDragLeave, handleDragEnter, handleOnDrop, handleDragEnd } = useColumnReorderFunc(state,dispatch)


  // Display columns 
  const displayColumns = state.tableData.table.columns.filter(column => {
    return column.hidden === false
  })

  return (
        <TR>
          {state.tableData.table.isCollapseRows ?
            <TH></TH>
          : null
          }
          {state.tableData.table.selectRow !== ''
          ?
            <TH></TH>
          : null
          }
          {displayColumns.map((column,index) => {
            return (
              <TH key={index} 
                className="dragelement"
                id={column.name}
                draggable
                onDragStart={handleDragStart}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleOnDrop}
                onDragEnd={handleDragEnd}
                dragOver={column.name === state.dragOver}
                >
                  <FaArrowsAlt />
                  <span>{column.name}</span>
              </TH>
            )
          })}
          {state.tableData.table.deleteRow ?
            <TH></TH>
          : null
          }
        </TR>
  )
};
