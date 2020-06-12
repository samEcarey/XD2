import React, { useEffect, useRef } from "react";
import { useTableState } from '../../context';
import styled from 'styled-components';
import { handleContextMenu } from '../../hooks';


export const TableContextMenu = () => {
  
  const contextRef = useRef(null);

  const [state, dispatch] = useTableState();

  useEffect(() => {
    if(state.tableData.table.isContextMenu) {
      handleContextMenu(state,dispatch, contextRef)
    }
  },[]);

  const returnContextMenu = () => {
    var myStyle = {
    'position': 'absolute',
    'top': `${state.contextY}px`,
    'left':`${state.contextX+5}px`
    }

    return <StyleContextMenu className='custom-context' id='customcontext' ref={contextRef} style={myStyle}>
       {state.contextMenu.map((item, index) =>{
          return <>
            <div key={index} index={index} className='custom-context-item'>{item.label}</div>
          </>
      })}
    </StyleContextMenu>;
  }
  

  return (
    <>
    {state.tableData.table.isContextMenu && state.contextVisible ? returnContextMenu(): null}
    </>
  )
};

const StyleContextMenu = styled.div`
  border: solid 1px #ccc;
  display: inline-block;
  margin: 5px;
  background: #FFF;
  color: #000;
  cursor: pointer;
  font-size: 12px;
  .custom-context-item{
    border-bottom: dotted 1px #ccc;
    padding: 5px 25px;
   }
   .custom-context-item-last{
    padding: 5px 25px;
   }
  
`
