export function useColumnCheckboxFunc(state, dispatch){
  

  function heandleFreezeColumn(){
    let newColumns =  state.tableData.table.columns.map((d, i) => { return {...d,checked: false} })
    state.tableData.table.columns = newColumns
    dispatch({ tableData: state.tableData})
  }
 
  function handleColumnCheckBoxFields(column, index){
    let newState = state.tableData.table.columns
    newState[index] = {
        ...newState[index], 
        checked: !newState[index].checked,
    }
    if(newState[index].checked === true) {
      newState = newState.sort((a,b) => {
        return  b.checked - a.checked
      });
      state.tableData.table.columns = newState
      dispatch({ tableData: state.tableData})
    } else {
      newState = newState.sort((a,b) => {
        return  b.checked - a.checked
      });
      state.tableData.table.columns = newState
      dispatch({ tableData: state.tableData})
    }
  }
  return { heandleFreezeColumn, handleColumnCheckBoxFields }
}