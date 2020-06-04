import React from "react";
import { useSelector } from 'react-redux'
import { useGlobalState } from '../../context'
import { TR, TH } from '../../styles'


export const TableFootCredit = () => {
  const [state] = useGlobalState();
  return (
    state.tableData.table.showFooter ?
    <TR>
      <TH colSpan={state.displayColumns.length}>(c) footer</TH>
    </TR>
    : null
  )
};
