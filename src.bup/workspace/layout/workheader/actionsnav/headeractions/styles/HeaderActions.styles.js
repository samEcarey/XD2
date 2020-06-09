import styled from "styled-components";
import { Breakpoints } from "app/common";
import { PRIMARY_SHADE, PRIMARY_TINT, WHITE_COLOR, SUCCESS_SHADE, DANGER_COLOR, GREY_700, GREY_950 } from "app/constants";


export const HeaderActionsStyled = styled.div`
	display: none;
	//display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: flex-end;
	margin-top: 2rem;
	margin-top: 0rem;
	@media ${Breakpoints.xl} { }
	.button-group-action {
		.button {
			color: ${WHITE_COLOR};
			width: 10rem;
			height: 3rem;
			font-size: 1.2rem;
			font-weight: bold;
			border: 1px solid;
			border-radius: 2rem;
			margin: 0rem 1rem;
			cursor: pointer;
			&.save { border-color: ${SUCCESS_SHADE}; }
			&.cancel { border-color: ${DANGER_COLOR}; }
		}
	}
	.button-group-step {
		display: flex;
		align-items: center;
		margin: 0rem 1rem;
		.button {
			margin: 0px;
			color: ${GREY_700};
			background-color: ${GREY_950};
			width: 11rem;
			height: 3rem;
			font-size: 1.2rem;
			font-weight: bold;
			border: 0px solid;
			cursor: pointer;
			display: flex;
			align-items: center;
			svg {
				color: ${WHITE_COLOR};
			}
			&.prev { 
				border-radius: 1rem 0rem 0rem 1rem; 
				svg {
					margin-right: 0.5rem;
				}
			}
			&.next { 
				border-radius: 0rem 1rem 1rem 0rem; 
				svg {
					margin-left: 0.5rem;
				}
			}
			&:hover {
				background-color: ${PRIMARY_TINT};
				color: ${WHITE_COLOR};
			}
		}
	}
	.icon-more {
		display: flex;
		margin: 0 1rem 0 0;
		svg {
			width: 3rem;
			height: 3rem;
			color: ${WHITE_COLOR};
		}
	}	
`;
