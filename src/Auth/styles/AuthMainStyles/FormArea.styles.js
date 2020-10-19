import styled from "styled-components";
import {
	PRIMARY_SHADE,
	PRIMARY_TINT,
	SECONDARY_COLOR,
	SECONDARY_SHADE,
	TERTIARY_COLOR,
	WARNING_COLOR,
	WARNING_SHADE,
	WARNING_TINT,
	DANGER_COLOR,
	DANGER_SHADE,
	DANGER_TINT,
	LIGHT_SHADE,
	COLOR_WHITE,
	BORDER_RADIUS,
	FORM_BORDER_RADIUS_PILL,
	FORM_PADDING,
	GREY_400,
	GREY_950,
	WHITE_COLOR
} from "app/constants";
// import { BORDER_RADIUS } from "app/constants";
import { PRIMARY_COLOR } from "app/data";
import {
	helperButtonSizeXS,
	helperButtonSizeREG,
	helperButtonSizeMD,
	helperButtonSizeLG
} from "app/common/actions/buttons/shame";

const marginBottomMobile = "3rem";
const marginBottomTablet = "1.5rem";
const marginBottomDesktop = "1.5rem";

export const StyledFormArea = styled.div`
	fieldset {
		legend {
			margin-bottom: ${marginBottomMobile};
			@media (min-width: 768px) {
				margin-bottom: ${marginBottomTablet};
			}
			text-align: center;
			font-size: 1.2rem;
			text-transform: uppercase;
			@media (min-width: 375px) {
				font-size: 1.6rem;
			}
			/* color: green; */
		}
		div.fieldgroup {
			margin-bottom: 1rem;
			@media (min-width: 375px) {
				margin-bottom: 1.5rem;
			}
			@media (min-width: 768px) {
				margin-bottom: 0.5rem;
			}
			label {
				display: none;
				/* text-align: center; */
				/* @media (min-width: 768px) {
					display: block;
				} */
				text-transform: uppercase;
				font-size: 1rem;
				color: ${SECONDARY_COLOR};
			}
			input {
				margin-bottom: 0.5rem;
				font-weight: bold;
				background-color: ${GREY_950};
				@media (min-width: 768px) {
					background-color: ${GREY_400};
					border-color: ${GREY_400};
					&::placeholder {
						color: ${TERTIARY_COLOR};
						font-size: 1em;
					}
				}
				&::placeholder {
					color: ${PRIMARY_TINT};
					font-size: 1em;
				}
				&:focus {
					background-color: ${PRIMARY_TINT};
					color: ${WHITE_COLOR};
				}
			}
			input[type="text"],
			input[type="password"],
			input[type="email"] {
				${helperButtonSizeLG}
				@media (min-width: 768px) {
					${helperButtonSizeMD}
				}
				border-radius: 0px;
				color: ${COLOR_WHITE};
			}
			small {
				/** NOT IN USE - app/common also commented out in Input.js */
				visibility: hidden;
				/* visibility: visible; */
				display: block;
				margin: 0rem 2.5rem 0rem 2.5rem;
				padding: 0rem 0.5rem 0rem 0.5rem;
				/* width: 80%; */
				font-weight: bold;
				color: ${COLOR_WHITE};
				background-color: ${DANGER_SHADE};
				border: 1px solid ${DANGER_SHADE};
				border-radius: ${BORDER_RADIUS};
				/* opacity: 0.7; */
			}
			button {
				display: block;
				margin-bottom: ${marginBottomMobile};
				@media (min-width: 768px) {
					margin-bottom: ${marginBottomTablet};
				}
				width: 100%;
				border-radius: .4rem;
				${helperButtonSizeLG}
				@media (min-width: 768px) {
					${helperButtonSizeMD}
				}
				color: ${WHITE_COLOR};
				&:hover {
					span {
						color: ${SECONDARY_SHADE};
						svg {
							fill: ${SECONDARY_SHADE};
						}
					}
				}
				span {
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-content: center;
					align-items: center;
					@media (min-width: 768px) {
						color: ${SECONDARY_COLOR};
					}
					svg {
						min-width: 1.5rem;
						max-width: 1.5rem;
						fill: ${COLOR_WHITE};
						@media (min-width: 768px) {
							fill: ${SECONDARY_COLOR};
						}
					}
					&.right > svg {
						margin: 0rem 0rem 0rem 1.5rem;
					}
					&.left > svg {
						margin: 0rem 1.5rem 0rem 0rem;
					}
				}
			}
		}
		
	}
	
`;
