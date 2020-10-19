export function useCollapseRowFunc(state, dispatch){

  // handle collapse column
  function handleCollapseRow(rowId){
    const currentExpandedRows = state.expandedRows;
    const isRowCurrentlyExpanded = currentExpandedRows.includes(rowId);
    
    const newExpandedRows = isRowCurrentlyExpanded ? 
      currentExpandedRows.filter(id => id !== rowId) : 
      currentExpandedRows.concat(rowId);
    
    dispatch({ expandedRows: newExpandedRows})
  }

  return { handleCollapseRow }
  
}