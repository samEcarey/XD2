import styled from "styled-components";
import { PRIMARY_SHADE } from "app/constants";

export const StyledFGLoginCheckbox = styled.div`
	/*** SHAME: Hack - flexbox not working right */
	display: grid;
	grid-template-columns: 4rem auto;
	grid-template-rows: auto;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	align-items: center;
	padding-bottom: 3rem;
	@media (min-width: 768px) {
		padding-bottom: 1rem;
	}
	/* background: red; */
	.checkbox-left , .checkbox-right {
		height: 2.4rem;
	}
	.checkbox-right {
		padding-top: .5rem;
	}
	label {
		display: block !important;
		width: 100% !important;
		text-transform: capitalize !important;
		/* background-color: red; */

		position: relative;
  	cursor: pointer;
	}
	input[type="checkbox"] {
		/* background-color: ${PRIMARY_SHADE}; */
		display: inline !important;
		margin: 0rem 1.5rem 0rem 1.5rem;
		padding: 0rem 0rem 0rem 0rem;
		height: initial;
		width: initial;
		margin-bottom: 0;
		display: none;
		cursor: pointer;
		&:checked {
			box-shadow: 0 0 0 3px hotpink;
		}
	}
	/* background-color: green; */
`;
