import React from 'react'
import styled from 'styled-components'
import { Fieldset, FormGroup, Label } from '../../styles'

export const ModalForm = (props) => {

  const sortColumn = props.stateValue.sortBy.filter((s) => {
    return s.column !== ''
  })

  const getOptions = (idx) => {
    switch(idx) {
      case idx:
        return props.stateValue.columns.map((col, index) => {
          let display = true
          for(let i = 0; i < idx; i++) {
             if(sortColumn[i].column === col.name) {
              display = false
             }
          }
          return display === true  ?
            <option key={index} value={col.name}>{col.headerText}</option> 
            : null
        })
      default:
        return props.stateValue.columns.map((col, index) => (
          <option key={index} value={col.name}>{col.headerText}</option>
        ))
    }
  }

	return (
		<StyledForm onSubmit={props.handleSort}>
      {props.stateValue.columns.map((c, idx) => (
        idx <= sortColumn.length ?
          <React.Fragment key={idx}>
            <label>{idx === 0 ? 'Sort by' : 'Then by'}</label>
            <FormGroup>
              <select name="column" value={props.stateValue.sortBy[idx] && props.stateValue.sortBy[idx].column} onChange={(e)=>props.handleChange(e,idx)}>
                <option value="">Choose Column</option>
                {getOptions(idx)}
              </select>
            </FormGroup>
            <FormGroup>
            <input 
              type="radio"
              name={idx}
              value="asc" 
              onChange={(e)=>props.handleChange(e,idx)}
              checked={props.stateValue.sortBy[idx] && props.stateValue.sortBy[idx].direction === "asc"}
            /><label>Asc</label><br/>
            <input 
              type="radio"
              name={idx}
              value="desc" 
              onChange={(e)=>props.handleChange(e,idx)}
              checked={props.stateValue.sortBy[idx] && props.stateValue.sortBy[idx].direction === "desc"}
            /><label>Desc</label>
          </FormGroup>
          </React.Fragment>
        : null
      ))}
      
			<FormGroup layout="savecontext">
				<button>Save</button>
        <button onClick={props.handleReset}>Reset</button>
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
