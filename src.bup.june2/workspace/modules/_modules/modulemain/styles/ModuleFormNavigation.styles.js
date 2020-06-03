import styled from "styled-components";
import { PRIMARY_SHADE, GREY_700, GREY_950, PRIMARY_TINT, WHITE_COLOR } from "app/constants"

export const ModuleFormNavigationStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3rem 1.5rem 1rem;
	.button-group-step {
		display: flex;
		align-items: center;
		.button {
			color: ${GREY_700};
			background-color: ${GREY_950};
			width: 11rem;
			height: 3.6rem;
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
`;
