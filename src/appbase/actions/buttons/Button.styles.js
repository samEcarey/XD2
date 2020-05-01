import styled from 'styled-components'
import { 
	INITIAL_COLOR, PRIMARY_COLOR, 
	SECONDARY_COLOR, TERTIARY_COLOR, 
	QUATERNARY_COLOR, QUINARY_COLOR } from '../../../appdata'

export const StyledButton = styled.button`
	display: inline-block;
	margin-bottom: 1.0rem;
	padding: 0 3.0rem;
	height: 3.8rem;
	font-size: 1.1rem;
	font-weight: 700;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: .1rem;
	line-height: 3.8rem;
	white-space: nowrap;
	cursor: pointer;
	color: ${INITIAL_COLOR};
	background-color: ${PRIMARY_COLOR};
	border: .1rem solid ${PRIMARY_COLOR};
	border-radius: .4rem;

	&:focus,
	&:hover {
		outline: 0;
		color: ${INITIAL_COLOR};
		background-color: ${SECONDARY_COLOR};
		border-color: ${SECONDARY_COLOR};
	}

	&[disabled] {
		cursor: default;
		opacity: .5;
		&:focus,
		&:hover {
			background-color: ${PRIMARY_COLOR};
			border-color: ${PRIMARY_COLOR};
		}
	}

	&.button-outline {
		background-color: transparent;
		color: ${PRIMARY_COLOR};
		&:focus,
		&:hover {
			color: ${SECONDARY_COLOR};
			background-color: transparent;
			border-color: ${SECONDARY_COLOR};
		}
		&[disabled] {
			&:focus,
			&:hover {
				color: ${PRIMARY_COLOR};
				border-color: inherit;
			}
		}
	}

	&.button-clear {
		color: ${PRIMARY_COLOR};
		background-color: transparent;
		border-color: transparent;
		&:focus,
		&:hover {
			color: ${SECONDARY_COLOR};
			background-color: transparent;
			border-color: transparent;
		}
		&[disabled] {
			&:focus,
			&:hover { color: ${PRIMARY_COLOR}; }
		}
	}
`