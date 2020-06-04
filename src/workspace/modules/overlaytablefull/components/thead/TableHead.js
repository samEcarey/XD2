import React from "react";
import { THead } from '../../styles'
import { TableHeadReorder } from './TableHeadReorder'
import { TableHeadTitle } from './TableHeadTitle'
import { TableHeadFilter } from './TableHeadFilter'

export const TableHead = () => {
  return (
    <THead>
      <TableHeadReorder />
      <TableHeadTitle />
      <TableHeadFilter />
    </THead>
  )
};
