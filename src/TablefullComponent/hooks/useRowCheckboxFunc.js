export function useRowCheckboxFunc(state, dispatch){

    // row all checkbox handle 
  function handleRowAllCheckBox(){
    let newHeader = !state.rowHeaderCheckbox
    let newFields = state.rowCheckboxFields.map((f) => {
      return {
        checked: newHeader,
        data: f.data
      }   
    })
    dispatch({ rowCheckboxFields: newFields})
    dispatch({ rowHeaderCheckbox: newHeader})
  }
  
  // row checkbox handle 
  function handleRowCheckBoxFields(row, index){
    let newState = [...state.rowCheckboxFields]
    newState[index] = {
        checked: !newState[index].checked,
        data: row
    }
    dispatch({ rowCheckboxFields: newState})
  }
   
  return { handleRowAllCheckBox, handleRowCheckBoxFields }
}