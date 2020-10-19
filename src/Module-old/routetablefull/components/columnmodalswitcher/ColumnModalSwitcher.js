import React from 'react'
import styled from 'styled-components'
import { IconFaCog } from '../../styles'
import { ModalForm } from './ModalForm'
import { handleModalDragFunc } from '../../hooks'

export class ColumnModalSwitcher extends React.Component {
	state = { show: false }
  showModal = () => { 
	handleModalDragFunc(this.props.column.name)
	this.setState({ show: true }) 
	this.props.handleColumnFilter(this.props.column.name)
  }
  hideModal = () => { 
	this.setState({ show: false })
	this.props.handleColumnFilter()
  }
  
  componentDidMount() {
    //handleModalDragFunc(this.props.column)
  }

	render() {
		return (
			<main>
				<Modal show={this.state.show} handleClose={this.hideModal} column= {this.props.column.name} >
					<h1 id={`modalheader_`+this.props.column.name}>{this.props.column.name} Column Filter</h1>
					<ModalForm {...this.props}/>
				</Modal>
				<StyledButton type='button' onClick={this.showModal}>
					<IconFaCog/>
				</StyledButton>
			</main>
		)
	}
}

const Modal = ({ handleClose, show, children, column }) => {
	const showHideClassName = show ? 'modal display-block' : 'modal display-none'
	return (
		<StyleWrapper>
		<div className={showHideClassName}>
			<section id={`modalpopup_`+column} className="modalpopup">
				{children}
				<div className="close">
					<button onClick={handleClose}>Close</button>
				</div>
			</section>
		</div>
		</StyleWrapper>
	)
}

const StyleWrapper = styled.div`
	div.display-block { display: block; }
	div.display-none { display: none; }
	.modal {
		z-index: 9999;
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.6);
		section {
			position:fixed;
			padding: 1.5rem;
			width: 60%;
			height: auto;
			top: 50%;
			left: 50%;
			text-align: left;
			color: #232323;
			background: #f1f1f1;
			border-radius: 10px;
			transform: translate(-50%,-50%);
			h1 { margin: 0rem; cursor: move; }
			p { }
		}
	}
	div.close { 
		text-align: center;
		button { 
			margin: 0rem auto; 
		}
	}
`

const StyledButton = styled.button`
	span {
		padding-top: .6rem;
		svg {
			fill: white;
			&:hover {
				fill: #2fa1cc;
			}
		}
	}
`