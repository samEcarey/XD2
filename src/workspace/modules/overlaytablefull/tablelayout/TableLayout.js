import React, {useEffect} from 'react'
import styled from 'styled-components'

import { TableCaption, TableHead, TableBody, TableFoot } from '../components'
import { useSelector, useDispatch } from 'react-redux'
import { getTable } from 'appdata/features/tablefull/actions/tableActions'
import { StyleTableLayout, Table } from '../styles'
import { handleSelectionCellsFunc, handleSelectionRowsFunc, handleResizableColumnsFunc, useDataConditionColumnFilterFunc, useColumnCheckboxFunc } from '../hooks'
import { useGlobalState } from '../context'

export const TableLayout = () => {

  const reduxdispatch = useDispatch();
  const [state, dispatch] = useGlobalState();

  useEffect(() => {
    reduxdispatch(getTable())
  },[]);

  // Get initial global state using redux data
  let InitialTableData = useSelector(state => state.tablefullReducer.tableData)


  useEffect(() => {
    setInitialTableData()
  },[InitialTableData]);

  function setInitialTableData() {
    dispatch({recordPerPage: InitialTableData})
    dispatch({tableData: InitialTableData})
    dispatch({displayColumns: InitialTableData.table.columns.filter(column => {return column.hidden === false})})
    dispatch({recordPerPage: InitialTableData.table.recordPerPage})
    dispatch({rowCheckboxFields: InitialTableData.table.rows.map((d,i) => { return { checked: false, data:d }})})
    dispatch({sortBy: InitialTableData.table.columns.map(() => { return { column: '', direction:'asc'} } )})
  }

  // Handle Data condition column filter
  const { handleDataConditionColumnFilter } = useDataConditionColumnFilterFunc(InitialTableData,state,dispatch)

  // column checkbox handle with freeze order
  const { heandleFreezeColumn } = useColumnCheckboxFunc(state, dispatch)

  useEffect(() => {
    if(state.tableData.table.isFreezeColumn){
      heandleFreezeColumn()
    }
    if(InitialTableData.table.isSelection === 'rows') {
      handleSelectionRowsFunc();
    } 
    if(InitialTableData.table.isSelection === 'cells') {
      handleSelectionCellsFunc();
    }
    if(state.tableData.table.isFreezeColumn === false && state.tableData.table.fixedHeader === false){
      handleResizableColumnsFunc()
    }
    handleDataConditionColumnFilter()
  },[InitialTableData,state.tableData]);

  console.log(state)
  return (
    <StyleTableLayout className={`${state.tableData.table.isFreezeColumn ? 'freezetable' : ''} ${state.tableData.table.fixedHeader ? 'fixed_headers' : ''}`}>
      <Table id="table">
        <TableCaption />
        <TableHead />
        <TableBody />
        <TableFoot />
      </Table>
    </StyleTableLayout>
  )
}


