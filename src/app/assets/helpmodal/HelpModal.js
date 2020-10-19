import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import ReactModal from 'react-modal-resizable-draggable';
import { handleCustomDragFunc } from './handleCustomDragFunc';
import { HelpTabs } from './helptabs';

export const HelpModal = (closeModal,openModal) => {
  const [helpIsOpen, setHelpIsOpen] = useState(false)
  const [isLock, setIsLock] = useState(false)
 
  const LockModal = () => {
    setIsLock(!isLock)
  }

  return (
    <HelpModalStyle>
        
        <ReactModal 
          top={150}
          minWidth={400} 
          minHeight={400} 
          disableMove={isLock} 
          initWidth={500} 
          initHeight={400} 
          disableResize={false} 
          disableVerticalResize={false}
          disableHorizontalResize={false}
          disableVerticalMove={false}
          disableHorizontalMove={false}
          onFocus={(e) => handleCustomDragFunc(e, isLock)}
          className={"my-modal-custom-class"}
          id={"my-modal-popup"}
          onRequestClose={closeModal} 
          bounds="window"
          isOpen={helpIsOpen}>
              <h3 className="drag-area">Help Modal</h3>
              <div className="helpbody">
                  <p>This is Help Documments</p>
                  <HelpTabs>
                    <div label="Doc1">
                      Doc1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum felis venenatis enim ullamcorper aliquet. Nunc quis cursus magna. Phasellus a ante eget nulla porttitor dapibus.
                    </div>
                    <div label="Doc2">
                      Doc2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum felis venenatis enim ullamcorper aliquet. Nunc quis cursus magna. Phasellus a ante eget nulla porttitor dapibus.
                    </div>
                    <div label="Doc3">
                      Doc3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum felis venenatis enim ullamcorper aliquet. Nunc quis cursus magna. Phasellus a ante eget nulla porttitor dapibus.
                    </div>
                  </HelpTabs>
              </div>
              {/* <button className="lock_help_modal" onClick={LockModal}>
                  {isLock ? "unlock" : "lock"}
              </button> */}
              <button className="close_help_modal" onClick={closeModal}>
                  Close modal
              </button>
          </ReactModal>
      
    </HelpModalStyle>
  );
};

export const HelpModalStyle = styled.div`
  .helpbody {
    padding: 15px;
  }
  .open_help_modal {
    float: right;
  }
  .close_help_modal {
    position: absolute;
    right: 30px;
    bottom: 30px;
  }
  .lock_help_modal {
    position: absolute;
    top:15px;
    right: 15px;
    z-index:9;
  }
  .drag-area{
    background: rgba(22, 22, 333, 0.2);
    height: 50px;
    cursor:move;
  }
  .flexible-modal {
    position: fixed;
    z-index: 9;
    border: 1px solid #ccc;
    background: white;
  }
  .flexible-modal-mask {
    position: fixed;
    height: 100%;
    background: rgba(55, 55, 55, 0.6);
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 1;
  }
  .flexible-modal-resizer {
    position:absolute;
    right:0;
    bottom:0;
    cursor:se-resize;
    margin:5px;
    border-bottom: solid 2px #333;
    border-right: solid 2px #333;
  }
  .flexible-modal-drag-area{
    background: rgba(22, 22, 333, 0.2);
    height: 50px;
    position:absolute;
    right:0;
    top:0;
    cursor:move;
    display: none;
  }
  .flexible-modal-drag-area-left, .flexible-modal-drag-area-bottom, .flexible-modal-drag-area-right {
    display: none;
  }
`
