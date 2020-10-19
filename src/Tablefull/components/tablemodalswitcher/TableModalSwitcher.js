import React, { useState } from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal-resizable-draggable';
import { IconFaCog } from '../../styles' ;
import { ModalForm } from './ModalForm';


export const TableModalSwitcher = (props) => {
	const [show, SetShow] = useState(false);

	const showModal = () => { 
		SetShow(true);
	}
  	const hideModal = () => { 
		SetShow(false);
	}
	return (
		<ModalStyled>
			{show &&
			<ReactModal 
				initHeight={450}
				disableResize={true} 
				onRequestClose={hideModal} 
				isOpen={show}
			>
				<h1>Advance Sort</h1>
				<div className="modalbody">
					<ModalForm {...props}/>	
					<button className="close" onClick={hideModal}>
						Close modal
					</button>
				</div>

				
			</ReactModal>
			}
			<button className="open-modal" type='button' onClick={showModal}>
				<IconFaCog/>
			</button>
		</ModalStyled>
	)
}

const ModalStyled = styled.main`
	button {
		color: WHITE;
	}
	button.open-modal {
		span {
			padding-top: .6rem;
			svg {
				fill: white;
				&:hover {
					fill: #2fa1cc;
				}
			}
		}
	}
	.modalbody {
		height: 450px;
		overflow-y:scroll;
		background: WHITE;
	}
	.flexible-modal {
		position: fixed;
		z-index: 9;
		border: 1px solid #ccc;
		background: white;
		color: #002b57;
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
	}
`