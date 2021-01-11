export function useDataConditionColumnFilterFunc(state, dispatch){


  function handleDataConditionColumnFilter() {
    var tableColumnsData = state.tableData.table.columns
    var tableRowsData = state.tableData.table.rows
    
    tableColumnsData.map((column,index) => {
      if(column.dataType === 'text' || column.dataType === 'boolean') {
        const uniqueColumnRowData = [];
        tableRowsData.map(row => {
            if (uniqueColumnRowData.indexOf(row[column.name]) === -1) {
              uniqueColumnRowData.push(row[column.name])
            }
        }) 
        if(uniqueColumnRowData.length > 8) {
          tableColumnsData[index]['defaultFilter'] = 'search'
          dispatch({ tableData: state.tableData})
        } 
        else {
          tableColumnsData[index]['defaultFilter'] = 'dropdown'
          dispatch({ tableData: state.tableData})
        }
      }
      if(column.dataType === 'percent') {
        tableColumnsData[index]['defaultFilter'] = 'sort'
        dispatch({ tableData: state.tableData})
      }
      if(column.dataType === 'number'  || column.dataType === 'currency') {
        const uniqueColumnRowData = [];
        tableRowsData.map(row => {
            if (uniqueColumnRowData.indexOf(row[column.name]) === -1) {
              uniqueColumnRowData.push(row[column.name])
            }
        }) 
        if(column.rangeOptions) {
          tableColumnsData[index]['defaultFilter'] = 'dropdownRange'
          dispatch({ tableData: state.tableData})
        } else {
          var rangeSlider = []
          rangeSlider[0] = Math.min(...uniqueColumnRowData)
          rangeSlider[1] = Math.max(...uniqueColumnRowData)
          tableColumnsData[index]['defaultFilter'] = 'rangeSlider'
          tableColumnsData[index]['defaultSliderValues'] = rangeSlider
          dispatch({ tableData: state.tableData})
        }
      }
    })
  }

  return { handleDataConditionColumnFilter  }
}