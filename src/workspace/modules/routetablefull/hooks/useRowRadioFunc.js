export function useRowRadioFunc(state, dispatch){
  
  // row checkbox handle 
  function handleRowRadioFields(key){
    dispatch({ rowRadioFields: key})
  }
   
  return { handleRowRadioFields }
}