export function useCollapseColumnFunc(state, dispatch){

  // handle collapse column
  function handleCollapseColumn(colId){
    const currentExpandedColumns = state.expandedColumns;
    const isRowCurrentlyExpanded = currentExpandedColumns.includes(colId);
    
    const newExpandedColumns = isRowCurrentlyExpanded ? 
    currentExpandedColumns.filter(id => id !== colId) : 
    currentExpandedColumns.concat(colId);
    
    dispatch({ expandedColumns: newExpandedColumns})
  }

  return { handleCollapseColumn }
  
}