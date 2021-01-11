export const handleSelectionCellsFunc = () => { 
  var table = document.getElementById('table');
  var trs = document.getElementById('table').tBodies[0].getElementsByTagName('td')
  var isMouseDown = false;
  var startRowIndex = null;
  var startCellIndex = null;

  function selectTo(cell) {

    var row = cell.parentNode;    
    var cellIndex = cell.cellIndex;
    var rowIndex = row.rowIndex;
    
    var rowStart, rowEnd, cellStart, cellEnd;
    
    if (rowIndex < startRowIndex) {
        rowStart = rowIndex;
        rowEnd = startRowIndex;
    } else {
        rowStart = startRowIndex;
        rowEnd = rowIndex;
    }
    
    if (cellIndex < startCellIndex) {
        cellStart = cellIndex;
        cellEnd = startCellIndex;
    } else {
        cellStart = startCellIndex;
        cellEnd = cellIndex;
    }        
   
    for (var i = rowStart; i <= rowEnd; i++) {
        var rowCells = table.querySelectorAll("tr")[i].querySelectorAll("td");
        for (var j = cellStart; j <= cellEnd; j++) {
            rowCells[j].classList.add("selected");
        }    
    }
  }
 
  table.querySelectorAll("td").forEach(evt => evt.addEventListener("mousedown", function(e) {
      
      isMouseDown = true;
      var cell = evt;
      if (e.shiftKey) {
          selectTo(cell);                
      } else if(e.ctrlKey){
        cell.classList.add("selected");
      } else {
          clearAll()
          cell.classList.add("selected");
          startCellIndex = cell.cellIndex;
          startRowIndex =  cell.parentNode.rowIndex;
      }
      e.preventDefault()
  }))

  table.querySelectorAll("td").forEach(evt => evt.addEventListener("mouseover", function() {
      if (!isMouseDown) return;
      clearAll()
      selectTo(evt);
  }))

  document.addEventListener('mouseup', () => {
    isMouseDown = false;
  });

  // Remove selected cell on click outside table
  window.addEventListener('click', function(e){   
    if (document.getElementById('table').contains(e.target)){
      return false;
    } else {
      clearAll()
    }
  });

  function clearAll() {
    for (var i = 0; i < trs.length; i++) {
        trs[i].classList.remove("selected");
    }
  }
}

