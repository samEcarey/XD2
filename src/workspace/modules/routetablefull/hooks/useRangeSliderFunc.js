export function useRangeSliderFunc(InitialTableData, state, dispatch){
   
  function handleRangeSlider(optionEvent, column, index){
    let arrayCopy = InitialTableData.table.rows
    let rangeValue = optionEvent
    state.tableData.table.columns[index]['rangeSliderValues'] = rangeValue
    let filterRows = arrayCopy.filter((row) => {
      console.log(row[column])
      return (
        row[column] >= rangeValue[0] &&  row[column] <= rangeValue[1]
      )
    })
    state.tableData.table.rows = filterRows
    dispatch({ tableData: state.tableData})
  }
  return { handleRangeSlider }
  
}