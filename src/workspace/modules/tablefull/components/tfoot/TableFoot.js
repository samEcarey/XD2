import React from "react";
import { TableFootCredit } from './TableFootCredit'
import { TableFootPagination } from './TableFootPagination'
import { TableContextMenu } from './TableContextMenu'
import { TFoot, TR, TH } from '../../styles'


export const TableFoot = () => {
  return (
    <TFoot>
      <TableFootCredit />
      <TableFootPagination />
      <TableContextMenu />
    </TFoot>
  )
};
