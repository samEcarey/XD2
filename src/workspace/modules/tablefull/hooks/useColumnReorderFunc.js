export function useColumnReorderFunc(state, dispatch){
   
  // Reorder functions
  function handleDragStart(e) {
    const { id } = e.target;
    const idx = state.tableData.table.columns.findIndex(col => col.name === id);
    if(idx >= 0) {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('colIdx', idx);
    }
    e.target.style.background = "gray";
    e.target.querySelector('span').style.display = "inline-block";
  }

  function handleDragOver(e) { 
    e.preventDefault() 
  }

  function handleDragEnter(e) {
    const { id } = e.target;
    dispatch({ dragOver: id});
  }

  function handleDragLeave(e) {
   
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

  function handleDragEnd(e) {
    e.target.style.background = "rgba(0,43,87,1.0)";
    e.target.querySelector('span').style.display = "none";
  }

  return { handleDragStart, handleDragOver, handleDragLeave, handleDragEnter, handleOnDrop, handleDragEnd }
  
}