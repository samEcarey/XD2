import React, {useEffect} from 'react';
import { TableCaption, TableHead, TableBody, TableFoot } from '../components';
import { TableLayoutStyled, Table } from '../styles';
import { handleSelectionCellsFunc, handleSelectionRowsFunc, handleResizableColumnsFunc, useDataConditionColumnFilterFunc, useColumnCheckboxFunc } from '../hooks';
import {useSpreadsheet} from '../../../../../Workflow/index'

import {  TableData } from "../constants";

export const TableLayout = (props) => {
const [state, dispatch] = useSpreadsheet();

//const [spreadsheet,dispatchSpreadsheet] = useSpreadsheet()
  // Handle Data condition column filter
const { handleDataConditionColumnFilter } = useDataConditionColumnFilterFunc(state,dispatch)

  // column checkbox handle with freeze order
  const { heandleFreezeColumn } = useColumnCheckboxFunc(state, dispatch)

  useEffect(() => {
    if(state.tableData.table.isFreezeColumn){
      heandleFreezeColumn()
    }
    if(state.tableData.table.isSelection === 'rows') {
      handleSelectionRowsFunc();
    } 
    if(state.tableData.table.isSelection === 'cells') {
      handleSelectionCellsFunc();
    }
    if(state.tableData.table.isFreezeColumn === false && state.tableData.table.fixedHeader === false){
      handleResizableColumnsFunc()
    }
    handleDataConditionColumnFilter()
  },[state.tableData.table]);


  return (
    state.tableData.table? ( <TableLayoutStyled className={`${state.tableData.table.isFreezeColumn ? 'freezetable' : ''} ${state.tableData.table.fixedHeader ? 'fixed_headers' : ''}`}>
    <Table id="table">
      <TableCaption />
      <TableHead />
      <TableBody />
      <TableFoot />
    </Table>
  </TableLayoutStyled>):(<div>undefined</div>)
   
  )
}


