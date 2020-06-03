import styled from "styled-components";
import { Breakpoints } from "app/common"
import { PRIMARY_SHADE, PRIMARY_TINT, WHITE_COLOR, SUCCESS_SHADE, DANGER_COLOR, GREY_700, GREY_950 } from "app/constants"

export const ModuleInfoStyled = styled.div`
	padding: 3rem 1.5rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media ${Breakpoints.xl} { flex-direction: row; }
	.Module-info-details {
		display: flex;
		@media ${Breakpoints.xl} { width: 70%; }
		.info-icon {
			margin-right: 2rem;
			svg { font-size: 8rem; }
		}
		.info-details {
			h3 {
				text-transform: uppercase;
				margin: 0px;
				font-size: 2.2rem;
			}
			p { font-size: 1.5rem; }
		}
	}
	.Module-info-actions {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 2rem;
		@media ${Breakpoints.xl} { 
			margin-top: 0rem;
			justify-content: flex-end;
			align-items: flex-end;
		}
		.button-group-action {
			.button {
				color: ${WHITE_COLOR};
				width: 10rem;
				height: 3.6rem;
				font-size: 1.2rem;
				font-weight: bold;
				border: 1px solid;
				border-radius: 2rem;
				margin-left: 2rem;
				cursor: pointer;
				&.save { border-color: ${SUCCESS_SHADE}; }
				&.cancel { border-color: ${DANGER_COLOR}; }
			}
		}
		.button-group-step {
			display: flex;
			align-items: center;
			margin-top: 0.5rem;
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
	}
`;
