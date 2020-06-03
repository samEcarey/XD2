import styled from "styled-components";
import { Breakpoints } from "app/common";
import { PRIMARY_SHADE, PRIMARY_COLOR, PRIMARY_TINT,SECONDARY_COLOR, WHITE_COLOR, GREY_500, GREY_700, GREY_950, SUCCESS_SHADE, DANGER_COLOR } from "app/constants";

export const WorkflowFormAreaStyled = styled.div`
	padding: 2rem 1.5rem;
	background-color: ${GREY_950};
	form.Workflow-form {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: auto;
		&::after {
			content: '';
			flex: auto;
		}
		.Form-group {
			padding: 2rem 0;
			box-sizing: border-box;
			width: 100%;
			@media ${Breakpoints.md} { 
				min-width: 48%;
				width: inherit;
				margin-right: 4%;
				&:nth-child(2n) {
					margin-right: 0;
				}
			}
			@media ${Breakpoints.xl} { 
				min-width: 22%;
				width: inherit;
				margin-right: 4%;
				&:nth-child(4n) {
					margin-right: 0;
				}
			}
			& > label {
				text-transform: uppercase;
				font-size: 1rem;
			}
			.form-input, .form-input-date {
				border-radius: 0px;
				border: 1px solid ${PRIMARY_TINT};
				background-color: #002040;
				color: ${WHITE_COLOR};
				font-size: 1.4rem;
				&:focus {
					background-color: ${PRIMARY_TINT};
				}
				
			}
			.form-group-checkbox, .form-group-radio {
				margin-top: 2rem;
				label {
					position: relative;
					padding-left: 3.5rem;
					margin-bottom: 2rem;
					cursor: pointer;
					font-size: 1.2rem;
					text-transform: inherit;
					vertical-align: middle;
					line-height: 2.5rem;
					-webkit-user-select: none;
					-moz-user-select: none;
					-ms-user-select: none;
					user-select: none;
				}
				input {
					position: absolute;
					opacity: 0;
					cursor: pointer;
					height: 0;
					width: 0;
					&:checked ~ .checkmark {
						background-color: ${PRIMARY_TINT};
						&:after {
							display: block;
						}
					}
				}
				.checkmark {
					position: absolute;
					top: 0;
					left: 0;
					height: 25px;
					width: 25px;
					background-color: #002040;
					border: 1px solid ${PRIMARY_TINT};
					&:after {
						content: "";
						position: absolute;
						display: none;
						left: 6px;
						top: 2px;
						width: 10px;
						height: 15px;
						border: solid white;
						border-width: 0 3px 3px 0;
						-webkit-transform: rotate(45deg);
						-ms-transform: rotate(45deg);
						transform: rotate(45deg);
					}
				}							  
			}
			.form-group-radio {
				&.horizontal {
					display: flex;
					& > label {
						margin-right: 3rem;
					}
				}
				.checkmark {
					border-radius: 50%;
					&:after {
						top: 4px;
						left: 4px;
						width: 15px;
						height: 15px;
						border-radius: 50%;
						background: white;
					}
				}
			}
		}
	}
	*::-webkit-input-placeholder { /* Edge */
		color: ${SECONDARY_COLOR};
	}
	
	*:-ms-input-placeholder { /* Internet Explorer */
		color: ${SECONDARY_COLOR};
	}
	
	*::placeholder {
		color: ${SECONDARY_COLOR};
	}
`;
