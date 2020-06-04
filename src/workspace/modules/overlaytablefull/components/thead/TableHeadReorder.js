import React from "react";
import { FaArrowsAlt } from "react-icons/fa";
import { useGlobalState } from '../../context'
import {  useColumnReorderFunc } from '../../hooks'
import { TR, TH } from '../../styles'

export const TableHeadReorder = () => {
  
  const [state, dispatch] = useGlobalState();

  // Handle Column reorder
  const { handleDragStart, handleDragOver, handleDragEnter, handleOnDrop } = useColumnReorderFunc(state,dispatch)


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
                onDragOver={handleDragOver}
                onDrop={handleOnDrop}
                onDragEnter={handleDragEnter}
                dragover={column.name === state.dragOver ? true : 'undefined'}  >
                  <FaArrowsAlt />
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
