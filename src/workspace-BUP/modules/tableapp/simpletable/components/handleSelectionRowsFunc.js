export const handleSelectionRowsFunc = () => { 
  //if(editCell) return true
  var lastSelectedRow;
  var isMouseDown = false;
  var table = document.getElementById('table');
  var trs = document.getElementById('table').tBodies[0].getElementsByTagName('tr')
  for (var i = 0; i < trs.length; i++) {
    trs[i].addEventListener("click", function(e)  {
      return function () {
        RowClick(this,false);
      };
    }(i))
  }

  // disable text selection
  document.onselectstart = function() {
      return false;
  }

  function RowClick(currenttr, lock) {
      if (window.event.ctrlKey) {
          toggleRow(currenttr);
      }
      
      if (window.event.button === 0) {
          if (!window.event.ctrlKey && !window.event.shiftKey) {
              clearAll();
              toggleRow(currenttr);
          }
      
          if (window.event.shiftKey) {
              selectRowsBetweenIndexes([lastSelectedRow.rowIndex, currenttr.rowIndex])
          }
      }
  }

  function toggleRow(row) {
      row.className = row.className === 'selected' ? 'selected' : 'selected';
      lastSelectedRow = row;
  }

  function selectRowsBetweenIndexes(indexes) {
      indexes.sort(function(a, b) {
          return a - b;
      });
      clearAll()
      for (var i = indexes[0]; i <= indexes[1]; i++) {
          trs[i-2].className = 'selected';
      }
  }

  function clearAll() {
      for (var i = 0; i < trs.length; i++) {
          trs[i].className = '';
      }
  }

  // Mouse drag
  table.tBodies[0].querySelectorAll("tr").forEach(evt => evt.addEventListener("mousedown", function(e) {
      if (window.event.ctrlKey) {
        evt.className = evt.className === 'selected' ? '' : 'selected';
      } 
      isMouseDown = true;
      evt.classList.add("selected");
      
      e.preventDefault()
  }))

  table.tBodies[0].querySelectorAll("tr").forEach(evt => evt.addEventListener("mouseover", function() {
      if (!isMouseDown) return;
      evt.classList.add("selected");
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
}