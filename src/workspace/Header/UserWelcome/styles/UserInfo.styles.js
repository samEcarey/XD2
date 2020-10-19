import styled from "styled-components";
import { Breakpoints } from "app/common";
import {
	PRIMARY_TINT,
	COLOR_WHITE,
	WHITE_COLOR,
	GREY_400,
	GREY_700,
	GREY_950,
	BORDER_RADIUS
} from "app/constants";

export const UserInfoStyled = styled.div`
	display: flex;
	align-items: center;
	margin: 1rem 0;
	padding: 0.5rem;
	border: 1px solid ${PRIMARY_TINT};
	border-radius: ${BORDER_RADIUS};
	figure.User-profile {
		display: none;
		@media ${Breakpoints.sm} {
			display: block;
		}
		margin: 0rem 0.4rem 0rem 0rem;
		padding: 0rem;
		width: 3.5rem;
		height: 3.5rem;
		background-color: ${PRIMARY_TINT};
		border-radius: ${BORDER_RADIUS};
	}
	.User-text {
		color: ${GREY_700};
		font-weight: normal;
		text-align: left;
		line-height: 1.8rem;
		small {
			font-size: 1.2rem;
		}
		span {
			display: block;
			font-size: 1.6rem;
			a {
				color: ${GREY_700};
			}
		}
	}
	.User-more {
		position: relative;
		display: inline-block;
		cursor: pointer;
		user-select: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		& > span > svg {
			margin: 1rem 0rem 0rem 1rem;
			width: 3rem;
			height: 3rem;
			color: ${PRIMARY_TINT};
			cursor: pointer;
		}
	}
	.User-more-popup {
		z-index: 10;
		position: absolute;
		visibility: hidden;
		padding: 1rem 2rem;
		width: 30rem;
		top: 60px;
		right: -25px;
		color: ${WHITE_COLOR};
		background-color: ${PRIMARY_TINT};
		border: 0.1rem solid ${GREY_950};
		border-radius: ${BORDER_RADIUS};
		&::after {
			content: "";
			position: absolute;
			top: -40px;
			right: 30px;
			border-color: transparent transparent ${PRIMARY_TINT} transparent;
			border-width: 2rem;
			border-style: solid;
		}
		&.show {
			visibility: visible;
			animation: fadeIn 1s;
			-webkit-animation: fadeIn 1s;
		}
		h2 {
			margin-bottom: 0.7rem;
			font-size: 2.5rem;
		}
		.close-icon {
			z-index: 6;
			position: absolute;
			top: 1rem;
			right: 1rem;
		}
		.User-logout {
			margin-top: 1rem;
			text-align: right;
			a {
				font-size: 1.4rem;
				color: ${WHITE_COLOR};
				&:visited {
					color: ${WHITE_COLOR};
				}
				padding: 1rem;
				text-transform: uppercase;
			}
			button {
				font-size: 1.2rem;
				background: ${WHITE_COLOR};
				border: 0px;
				border-radius: 2rem;
				color: ${PRIMARY_TINT};
				height: 3.5rem;
				width: 10rem;
				margin-left: 2rem;
			}
		}

		/* Add animation (fade in the popup) */
		@-webkit-keyframes fadeIn {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}

		@keyframes fadeIn {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
			}
		}
	}
`;
