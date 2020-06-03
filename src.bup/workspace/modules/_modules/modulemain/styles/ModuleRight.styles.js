import styled from "styled-components";
import { PRIMARY_SHADE, PRIMARY_COLOR, PRIMARY_TINT,SECONDARY_COLOR, WHITE_COLOR, GREY_500, GREY_700, SUCCESS_SHADE, DANGER_COLOR } from "app/constants"

export const ModuleRightStyled = styled.aside`
	padding: 1rem 1rem 3rem 1rem;
	border: 1px solid ${PRIMARY_TINT};
	border-radius: 1rem;
	color: ${WHITE_COLOR};
	.Workflow-menugroup {
		.Workflow-menugrouptitle {
			h4 {
				svg {
					margin-right: 1rem;
					vertical-align: middle;
					font-size: 2.5rem;
				}
				text-transform: uppercase;
			}
		}
		.Workflow-menugroupitems {
			padding: 1px 0px 1px 0px;
			
			ol {
				counter-reset: list;
				margin: 0rem 0rem 0rem 0rem;
				padding: 0rem;
				list-style: none;
				& > li {
					counter-increment: list;
					margin: 0px 0px 0px 0px;
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
					.step-content {
						display: none;
						ul {
							margin: 1rem 0 0 1rem;
							padding: 0rem;
							list-style: none;
							li {
								padding: 0.5rem 0rem;
								margin: 0rem;
								&:before {
									content: "•";  
									color: ${GREY_500}; 
									font-weight: bold; 
									display: inline-block; 
									width: 1.5rem; 
									margin-left: -1.5rem; 
									font-size: 2.5rem;
									line-height: 2.5rem;
									vertical-align: sub;
								}
							}
						}
					}
					
				}
			}
		}
	}
`;
