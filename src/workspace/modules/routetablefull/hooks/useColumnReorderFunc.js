export function useColumnReorderFunc(state, dispatch){
   
  // Reorder functions
  function handleDragStart(e) {
    const { id } = e.target;
    const idx = state.tableData.table.columns.findIndex(col => col.name === id);
    if(idx >= 0) {
      e.dataTransfer.setData('colIdx', idx);
      e.target.style.cursor = 'move'; 
    }
  }

  function handleDragOver(e) { 
    e.preventDefault() 
  }

  function handleDragEnter(e) {
    const { id } = e.target;
    //e.target.style.cursor = 'move'; 
    dispatch({ dragOver: id})
  }

  function handleOnDrop(e) {
    const columns = state.tableData.table.columns
    const { id } = e.target;
    //e.target.style.cursor = 'move'; 
    const droppedColIdx = state.tableData.table.columns.findIndex(col => col.name === id);
    const draggedColIdx = e.dataTransfer.getData('colIdx');
    const tempCols = [...columns];
    
    tempCols[draggedColIdx] = columns[droppedColIdx];
    tempCols[droppedColIdx] = columns[draggedColIdx];
    
    if(droppedColIdx >= 0){
      state.tableData.table.columns = tempCols
      dispatch({ tableData: state.tableData})
    }
    dispatch({ dragOver: ''})
  }

  return { handleDragStart, handleDragOver, handleDragEnter, handleOnDrop }
  
}