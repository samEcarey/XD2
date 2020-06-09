import React, {useState} from 'react'
import styled from 'styled-components'
import { IconFaCog } from '../../styles'
import { ModalForm } from '../columnmodalswitcher/ModalForm'

export const DropdownSwitcher = (props) => {
	
	const [show, setShow] = useState(false)

	const showModal = () => { 
		setShow(true) 
		props.handleColumnFilter(props.column.name)
	}
	const hideModal = () => { 
		setShow(false) 
		props.handleColumnFilter()
	}
	
	return (
		<DropdownSwitcherStyle>
			<div onClick={showModal}><IconFaCog /></div>
			{show ?
			<div class="dropdownmodal">
				<input 
					type="radio"
					name={props.column.name}
					value="search" 
					onChange={props.handleGearColumn}
					checked={props.columnGearFilter[props.column.name] === 'search'}  
					/><label>Search</label><br/>
					<input 
					type="radio"
					name={props.column.name}
					value="sort" 
					onChange={props.handleGearColumn}
					checked={props.columnGearFilter[props.column.name] === 'sort'} 
					/><label>Sort</label><br/>
					<input 
					type="radio"
					name={props.column.name}
					value="dropdown" 
					onChange={props.handleGearColumn}
					checked={props.columnGearFilter[props.column.name] === 'dropdown'} 
					/><label>Dropdown</label><br/>
					{props.column.dataType === 'number' || props.column.dataType === 'currency' ?
					<>
					<input 
					type="radio"
					name={props.column.name}
					value="rangeSlider" 
					onChange={props.handleGearColumn}
					checked={props.columnGearFilter[props.column.name] === 'rangeSlider'} 
					/><label>Range Slider</label><br/></>
					: null }
					<button name={props.column.name} onClick={(e) => props.handleResetColumn(e)}>Reset</button>
					<button name={props.column.name} onClick={hideModal}>Close</button>
			</div>
			: null
			}
		</DropdownSwitcherStyle>
	)
	
}


const DropdownSwitcherStyle = styled.div`
	position: relative;
	.dropdownmodal {
		position: absolute;
		width: 100%;
		background: green;
		top: 40px;
		padding: 15px;
		color: white;
		z-index:9;
		text-align: left;
		
	}
`

