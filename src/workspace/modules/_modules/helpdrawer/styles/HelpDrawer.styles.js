import styled from "styled-components";
import { PRIMARY_TINT, WHITE_COLOR, SUCCESS_COLOR, DANGER_SHADE, WARNING_TINT, GREY_900 } from "app/constants";

export const HelpDrawerStyled = styled.section`
	// Help close icon style
	a.Help-close-icon {
		svg {
			color: ${WHITE_COLOR}
		}
	}
	// Help title style
	h2 {
		margin: 2rem 0rem;
		color: ${WHITE_COLOR}
	}
	// Help tabs style
	.Help-tabs {
		.Help-tab-list {
			padding: 2rem 0rem 0rem 0rem;
			margin: 0rem 0rem;;
			list-style: none;
			border-bottom: 1px solid ${WHITE_COLOR};
			display: flex;
			justify-content: space-between;
			text-transform: uppercase;
		}
		.Help-tab-list-item {
			text-transform: uppercase;
			color: ${PRIMARY_TINT};
			font-weight: bold;
			cursor: pointer;
			&.active {
				color: ${WHITE_COLOR};
			}
		}
		// Help user histor tab style
		.Help-tab-content {
			ul.History-list-items{
				margin: 1.5rem 0rem;
				li {
					background-color: ${GREY_900};
					color: ${WHITE_COLOR};
					border-left: 3px solid;
					display: flex;
					align-items: center;
					margin-bottom: 0.5rem;
					padding: 0.5rem 0.5rem 0.5rem 0rem;
					span { 
						width: 15%; 
						text-align: center;
					}
					h3 {
						width: 60%;
						font-size: 1.5rem;
						margin: 0rem;
						padding: 0rem;
					}
					button {
						width: 25%;
						margin: 0px;
						border-radius: 12rem;
					}
					&.Item-created {
						border-color: ${SUCCESS_COLOR};
						span svg { color: ${SUCCESS_COLOR}; }
						button { 
							background-color: ${SUCCESS_COLOR};
						}
					}
					&.Item-deleted {
						border-color: ${DANGER_SHADE};
						span svg { color: ${DANGER_SHADE}; }
						button { 
							background-color: ${DANGER_SHADE};
						}
					}
					&.Item-edited {
						border-color: ${WARNING_TINT};
						span svg { color: ${WARNING_TINT}; }
						button { 
							background-color: ${WARNING_TINT};
						}
					}
				}
			}
		}
	}
`;
