export function handleContextMenu(state,dispatch, contextRef) {
  document.addEventListener('contextmenu', function(event){
    event.preventDefault();
    const clickX = event.clientX;
    const clickY = event.clientY;
    dispatch({contextVisible: true})
    dispatch({contextX: clickX})
    dispatch({contextY: clickY})
  });

  document.addEventListener('click', function(event){
    if(contextRef.current && contextRef.current.id==='customcontext'){
      click(event.target.getAttribute('index'));
    }
    event.preventDefault();
    dispatch({contextVisible: false})
    dispatch({contextX: 0})
    dispatch({contextY: 0})
  });

  const click = (index) => {
    if(index && state.contextMenu[index].callback)
      itemCallback()
    else{
      console.log("callback not registered for the menu item")
    }
  }

  const itemCallback = () => {
    alert("clicked on Item 1")
  }

}