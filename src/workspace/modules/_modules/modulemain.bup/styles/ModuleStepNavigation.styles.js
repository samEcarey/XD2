import styled from "styled-components";
import { PRIMARY_TINT, WHITE_COLOR, PRIMARY_COLOR, GREY_500 } from "app/constants"

export const ModuleStepNavigationStyled = styled.div`
	padding: 0rem 1.5rem 2rem;
	.step-navbar {
		ol {
			display: flex;
			margin: 0rem 0rem 0rem 0rem;
			padding: 0rem;
			list-style: none;
			& > li {
				counter-increment: list;
				margin: 0 1.5rem 0 0;
				padding: 1rem 0 1rem 0px;
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
					label { background-color: ${PRIMARY_TINT}; cursor: pointer; }
					.step-content {
						display: block;
						padding: 1rem;
					}
				}
			}
		}
	}
`;
