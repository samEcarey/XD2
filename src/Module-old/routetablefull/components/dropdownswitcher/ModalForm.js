import React from 'react'
import styled from 'styled-components'
import { Fieldset, FormGroup, Label } from '../../styles'

export const ModalForm = (props) => {
	return (
		<StyledForm onSubmit={props.handleResetColumn}>
      <label>Filter by</label>
      <FormGroup>
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
        /><label>Sort</label>
		 <input 
          type="radio"
          name={props.column.name}
          value="dropdown" 
          onChange={props.handleGearColumn}
          checked={props.columnGearFilter[props.column.name] === 'dropdown'} 
        /><label>Dropdown</label>
		{props.column.dataType === 'number' || props.column.dataType === 'currency' ?
		<>
		 <input 
          type="radio"
          name={props.column.name}
          value="rangeSlider" 
          onChange={props.handleGearColumn}
          checked={props.columnGearFilter[props.column.name] === 'rangeSlider'} 
        /><label>Range Slider</label></>
		: null }
	  </FormGroup> 
      <FormGroup layout="savecontext">
        <button name={props.column.name} onClick={(e) => props.handleResetColumn(e)}>Reset</button>
			</FormGroup>
		</StyledForm>
	)
}

const StyledForm = styled.form`
	margin-bottom: 3.0rem;
	background: white;
	border-radius: 1.0rem;
	div {
		label { }
		input[type="radio"] { 
			margin-right: 1rem; 
			margin-bottom: .6rem;
			
			background-color: #002040;
			border: .0625em solid rgba(255,255,255,.5);
			border-radius: 50%;
			box-shadow: inset 0 0 0 0 white;
			cursor: pointer;
			font: inherit;
			width: 1.6em;
			height: 1.6em;
			outline: none;
			-moz-appearance: none;
			-webkit-appearance: none;
			&:checked {
				background-color: RED;
				box-shadow: inset 0 0 0 .1875em #47d1da;
				-webkit-transition: background .15s, box-shadow .1s; 
				transition: background .15s, box-shadow .1s; 
			}
		}
		button { margin-bottom: 0rem; }
	}
`
