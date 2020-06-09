import styled from "styled-components";
import { Breakpoints } from "app/common";
import { PRIMARY_SHADE, PRIMARY_COLOR, PRIMARY_TINT,SECONDARY_COLOR, WHITE_COLOR, GREY_500, GREY_700, GREY_950, SUCCESS_SHADE, DANGER_COLOR } from "app/constants";

export const WorkflowStepNavbarStyled = styled.nav`
	ol {
		display: flex;
		justify-content: center;
		flex-direction: column;
		margin: 0rem 0rem 0rem 0rem;
		padding: 0rem;
		list-style: none;
		@media ${Breakpoints.md} { 
			flex-direction: row;
		}
		& > li {
			display: none;
			counter-increment: list;
			margin: auto;
			padding: 1rem 0 1rem 0px;
			width: 80%;
			@media ${Breakpoints.md} { 
				margin: 0 1.5rem 0 0;
				display: block;
				width: auto;
			}
			label {
				display: block;
				border: 1px solid ${PRIMARY_TINT};
				border-radius: 1rem;
				padding: 0.5rem 1rem;
				cursor: pointer;
				span {
					color: ${PRIMARY_COLOR};
					background-color: ${GREY_500};
					font-weight: bold;
					display: inline-block;
					margin: 0 1rem 0 0;
					padding: 0rem;
					width: 3rem;
					height: 3rem;
					text-align: center;
					font-size: 1.5rem;
					line-height: 3rem;
					border-radius: 50%;
				}
				input { display: none; }
			}
			&.active {
				display: block;
				label { background-color: ${PRIMARY_TINT}; cursor: pointer; }
				.step-content {
					display: block;
					padding: 1rem;
				}
			}
		}
	}
`;
