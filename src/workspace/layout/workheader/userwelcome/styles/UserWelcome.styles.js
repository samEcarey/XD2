import styled from "styled-components";
import { Breakpoints } from "app/common";
import { PRIMARY_TINT, COLOR_WHITE, WHITE_COLOR, GREY_400, GREY_700, GREY_950 } from "app/constants";

export const UserWelcomeStyled = styled.div`
	display: none;
	align-items: center;
	border: 2px solid ${PRIMARY_TINT};
	border-radius: 1rem;
	padding: 0.7rem;
	@media ${Breakpoints.lg} {
		display: flex;
	}
	.User-text {
		color: ${GREY_700};
		font-weight: bold;
		text-align: left;
		font-size: 1.8rem;
		line-height: 1.8rem;
		span {
			display: block;
		}
		a {
			color: ${GREY_700};	
		}
	}
	.User-more {
		position: relative;
		display: inline-block;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		& > span > svg {
			width: 30px;
			height: 30px;
			color: ${PRIMARY_TINT};
			margin: 1rem 0rem 0rem 1rem;
			cursor: pointer;
		}
	}
	figure.User-profile {
		margin: 0;
		padding: 0;
		width: 4.5rem;
		height: 4.5rem;
		background-color: ${PRIMARY_TINT};
		border-radius: 1rem;
		margin-right: 1rem;
		display:none;
		@media ${Breakpoints.sm} {
			display: block;
		}
	}
	.User-more-popup {
		visibility: hidden;
		width: 300px;
		background-color: ${PRIMARY_TINT};
		color: ${WHITE_COLOR};
		border: 1px solid ${GREY_950};
		border-radius: 1rem;
		padding: 1rem 2rem;
		position: absolute;
		z-index: 5;
		top: 60px;
		right: -25px;
		&::after {
			content: "";
			position: absolute;
			top: -40px;
			border-width: 2rem;
			border-style: solid;
			border-color: transparent transparent ${PRIMARY_TINT} transparent;
			right: 30px;
		}
		&.show {
			visibility: visible;
			-webkit-animation: fadeIn 1s;
			animation: fadeIn 1s;
		}
		h2 {
			font-size: 2.5rem;
			margin-bottom: 0.7rem;
		}
		.close-icon {
			position: absolute;
			z-index: 6;
			right: 1rem;
			top: 1rem;
		}
		.User-logout {
			margin-top: 1rem;
			text-align: right;
			a {
				font-size: 1.5rem;
				color: ${COLOR_WHITE};
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
		from {opacity: 0;} 
		to {opacity: 1;}
		}

		@keyframes fadeIn {
		from {opacity: 0;}
		to {opacity:1 ;}
		}
	}
`;
