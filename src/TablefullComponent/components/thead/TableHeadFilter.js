import React from "react";
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { TableData } from "../../constants";
import { useTableState } from '../../context';
import {  useSearchFunc, useDropdownFilterFunc, useColumnSortFunc, useRangeSliderFunc } from '../../hooks';
import { TR, TH } from '../../styles';

export const TableHeadFilter = () => {
  
  const [state, dispatch] = useTableState();

  const { InitialTableData } = TableData();

  // Handle Seacrh 
  const { handleSearch } = useSearchFunc(InitialTableData,state,dispatch)

  // Handle Dropdown Filter
  const { handleDropdownRange, handleDropdownOptionChange, handleDropdownOptionList } = useDropdownFilterFunc(InitialTableData,state,dispatch)

  // Handle Column Sort
  const { handleColumnSort, handleColumnDirection } = useColumnSortFunc(InitialTableData, state,dispatch)

  // Handle range slider
  const { handleRangeSlider } = useRangeSliderFunc(InitialTableData,state,dispatch)

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
            {state.tableData.table.selectRow 
            ?
              <TH></TH>
            : null
            }
            {displayColumns.map((column,index) => {
              return (
                state.columnGearFilter[column.name] 
                ?
                  state.columnGearFilter[column.name] === 'search' ?
                    <TH dragOver={column.name === state.dragOver} className={`${column.name === state.dragColumn ? `dragcolumn` : ''} ${column.checked ? `freeze freeze_${index}` : ''} ${state.selectedGearColumn === column.name ? 'current_filter' : ''}`} key={index}><input type="search" name={column.name} defaultValue='' onChange={(e) => handleSearch(e, column.name)} /></TH>
                  : state.columnGearFilter[column.name] === 'dropdown' ?
                    <TH dragOver={column.name === state.dragOver} className={`${column.name === state.dragColumn ? `dragcolumn` : ''} ${column.checked ? `freeze freeze_${index}` : ''} ${state.selectedGearColumn === column.name ? 'current_filter' : ''}`} key={index}>
                      <select onChange={(e) => handleDropdownOptionChange(e, column.name)}>
                        <option value="">Choose Option</option>
                        {handleDropdownOptionList(column.name)}
                      </select>
                    </TH>
                  : state.columnGearFilter[column.name] === 'dropdownRange' ?
                    <TH dragOver={column.name === state.dragOver} className={`${column.name === state.dragColumn ? `dragcolumn` : ''} ${column.checked ? `freeze freeze_${index}` : ''} ${state.selectedGearColumn === column.name ? 'current_filter' : ''}`} key={index}>
                      <select onChange={(e) => handleDropdownRange(e, column.name)}>
                        <option value="">Choose Option</option>
                        {column.rangeOptions.map((option) => (
                          <option value={`${option.minValue}-${option.maxValue}`}>{option.minValue}-{option.maxValue}</option>
                        ))}
                      </select>
                    </TH>
                  : state.columnGearFilter[column.name] === 'sort' ?
                    <TH dragOver={column.name === state.dragOver} className={`${column.name === state.dragColumn ? `dragcolumn` : ''} ${column.checked ? `freeze freeze_${index}` : ''} ${state.selectedGearColumn === column.name ? 'current_filter' : ''}`} key={index}>
                      <span onClick={()=>handleColumnSort(column.name)}>Sort {handleColumnDirection(column.name)}</span>
                    </TH>
                  : state.columnGearFilter[column.name] === 'rangeSlider' ?
                    <TH dragOver={column.name === state.dragOver} className={`${column.name === state.dragColumn ? `dragcolumn` : ''} ${column.checked ? `freeze freeze_${index}` : ''} ${state.selectedGearColumn === column.name ? 'current_filter' : ''}`} key={index}>
                      <Range defaultValue={[column.defaultSliderValues[0], column.defaultSliderValues[1]]} min={column.defaultSliderValues[0]} max={column.defaultSliderValues[1]} onChange={(e)=>handleRangeSlider(e,column.name,index)} /> <br/>
                      {column.rangeSliderValues ?
                      <strong>Range: {column.rangeSliderValues[0]}-{column.rangeSliderValues[1]}</strong>
                      : null}
                    </TH>
                  : <TH dragOver={column.name === state.dragOver} className={`${column.name === state.dragColumn ? `dragcolumn` : ''} ${column.checked ? `freeze freeze_${index}` : ''} ${state.selectedGearColumn === column.name ? 'current_filter' : ''}`} key={index}></TH>
                : column.defaultFilter === 'search' ?
                    <TH dragOver={column.name === state.dragOver} className={`${column.name === state.dragColumn ? `dragcolumn` : ''} ${column.checked ? `freeze freeze_${index}` : ''} ${state.selectedGearColumn === column.name ? 'current_filter' : ''}`} key={index}><input type="search" name={column.name} onChange={(e) => handleSearch(e, column.name)} /></TH>
                  : column.defaultFilter === 'dropdown' ?
                    <TH dragOver={column.name === state.dragOver} className={`${column.name === state.dragColumn ? `dragcolumn` : ''} ${column.checked ? `freeze freeze_${index}` : ''} ${state.selectedGearColumn === column.name ? 'current_filter' : ''}`} key={index}>
                      <select onChange={(e) => handleDropdownOptionChange(e, column.name)}>
                        <option value="">Choose Option</option>
                        {handleDropdownOptionList(column.name)}
                      </select>
                    </TH>
                  : column.defaultFilter === 'dropdownRange' ?
                    <TH dragOver={column.name === state.dragOver} className={`${column.name === state.dragColumn ? `dragcolumn` : ''} ${column.checked ? `freeze freeze_${index}` : ''} ${state.selectedGearColumn === column.name ? 'current_filter' : ''}`} key={index}>
                      <select onChange={(e) => handleDropdownRange(e, column.name)}>
                        <option value="">Choose Option</option>
                        {column.rangeOptions.map((option) => (
                          <option value={`${option.minValue}-${option.maxValue}`}>{option.minValue}-{option.maxValue}</option>
                        ))}
                      </select>
                    </TH>
                  : column.defaultFilter === 'sort' ?
                    <TH dragOver={column.name === state.dragOver} className={`${column.name === state.dragColumn ? `dragcolumn` : ''} ${column.checked ? `freeze freeze_${index}` : ''} ${state.selectedGearColumn === column.name ? 'current_filter' : ''}`} key={index}>
                      <span onClick={()=>handleColumnSort(column.name)}>Sort {handleColumnDirection(column.name)}</span>
                    </TH>
                  : column.defaultFilter === 'rangeSlider' ?
                    <TH dragOver={column.name === state.dragOver} className={`${column.name === state.dragColumn ? `dragcolumn` : ''} ${column.checked ? `freeze freeze_${index}` : ''} ${state.selectedGearColumn === column.name ? 'current_filter' : ''}`} key={index}>
                      <Range defaultValue={[column.defaultSliderValues[0], column.defaultSliderValues[1]]} min={column.defaultSliderValues[0]} max={column.defaultSliderValues[1]} onChange={(e)=>handleRangeSlider(e,column.name,index)} /> <br/>
                      {column.rangeSliderValues ?
                      <strong>Range: {column.rangeSliderValues[0]}-{column.rangeSliderValues[1]}</strong>
                      : null}
                    </TH>
                  : <TH dragOver={column.name === state.dragOver} className={`${column.name === state.dragColumn ? `dragcolumn` : ''} ${column.checked ? `freeze freeze_${index}` : ''} ${state.selectedGearColumn === column.name ? 'current_filter' : ''}`} key={index}></TH>
              )
            })}
          </TR>
  )
};
