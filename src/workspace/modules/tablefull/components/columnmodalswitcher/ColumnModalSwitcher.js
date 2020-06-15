import React, { useState } from 'react'
import styled from 'styled-components'
import ReactModal from 'react-modal-resizable-draggable';
import { IconFaCog } from '../../styles'
import { ModalForm } from './ModalForm'


export const ColumnModalSwitcher = (props) => {
  
	const [show, SetShow] = useState(false);

	const showModal = () => { 
		SetShow(true);
		props.handleColumnFilter(props.column.name)
	}
  	const hideModal = () => { 
		SetShow(false);
		props.handleColumnFilter()
	}
	
	return (
		<ModalStyled>
			{show &&
			<ReactModal 
				onRequestClose={hideModal} 
				isOpen={show}
				top={100} 
				minWidth={450} 
          		minHeight={320} 
			>
				<h1>{props.column.name} Column Filter</h1>
				<div className="modalbody">
					<ModalForm {...props}/>	
					<button className="close" onClick={hideModal}>Close</button>
				</div>
			</ReactModal>
			}
			<button className="open-column-modal" type='button' onClick={showModal}>
				<IconFaCog/>
			</button>
		</ModalStyled>
	)
	
}



const ModalStyled = styled.main`
	button {
		color: WHITE;
	}
	button.open-column-modal {
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
	h1 {
		padding: 0 1rem;
	}
	.modalbody {
		padding: 1rem;
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