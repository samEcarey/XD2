import styled from "styled-components";
import { Breakpoints } from "app/common";
import { WHITE_COLOR, PRIMARY_COLOR, PRIMARY_TINT, PRIMARY_SHADE, GREY_950 } from "app/constants"

export const AgencySearchNavStyled = styled.nav`
	display: none;
	@media ${Breakpoints.lg} {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		align-items: center;
	}
	&.Skeleton-Workheader-agencysearch {
		.Form-group {
			background-color: RED;
			background: -webkit-gradient(
				linear,
				left top,
				right top,
				color-stop(8%, RED),
				color-stop(18%, rgba(130, 130, 130, 0.3)),
				color-stop(33%, RED)
			);
			background: linear-gradient(
				to right,
				RED 8%,
				rgba(130, 130, 130, 0.3) 18%,
				RED 33%
			);
			background-size: 800px 100px;
			animation: wave-squares 2s infinite ease-out;
			@keyframes wave-squares {
				0% {
					background-position: -468px 0;
				}
				100% {
					background-position: 468px 0;
				}
			}
		}
	}
	form {
		margin: 0rem 0rem 0rem 0rem;
		padding: 0rem 0rem 0rem 0rem;
		width: 100%;
		.Form-group {
			margin: 0rem 0rem 0rem 0rem;
			padding: 0rem 0rem 0rem 0rem;
			background: ${GREY_950};
			border-radius: 5rem;
			width: 100%;
			svg {
				margin-left: 2rem;
			}
			input {
				margin: 0rem 0rem 0rem 0rem;
				padding: 0.5rem 0.5rem 0.9rem 0.5rem;
				width: 100%;
				border-radius: 0rem;
				border: none;
				color: ${PRIMARY_TINT};
				&::placeholder {
					color: ${PRIMARY_TINT};
				}
			}
		}
		/* Flashing Cursor */
		.caret {
			height: 6rem;
			display: block;
			width: 100%;
			.caret-content {
				height: 100%;
				display: block;
				padding: 1rem;
				position: relative;
				text-align: left;
				line-height: 4rem;
				&:after {
					content: "";
					display: table;
					clear: both;
				}
				.caret-place-holder {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					color: ${PRIMARY_TINT};
					font-size: 2rem;
					font-weight: bold;
					padding: 1rem;
					display: inline-block;
					transition: all .4s;
					&.hide { transform: scale(0); opacity: 0; }
				}
				.input-content {
					font-size: 1.5rem;
					vertical-align: top;
					padding-top: 4px;
					display: inline-block;
					height: 100%;
					font-weight: bold;
					color: ${PRIMARY_TINT};
				}
				.input-caret {
					padding: 4px 5px;
					width: 0;
					height: 100%;
					background: ${PRIMARY_TINT};
					display: none;
					&.bling {
						display: inline-block;
						animation: caret-bling 1s infinite, caret-scale .4s;
					}
				}
				.hidden-input { width: 0; height: 0; opacity: 0; }
			}
		}
		@keyframes caret-bling {
			0% { opacity: 1; }
			100% { opacity: 0; }
		}
		@keyframes caret-scale {
			0% { opacity: 0; transform: scaleX(15) scaleY(5); }
			100% { opacity: 1; transform: scaleX(1) scaleY(1); }
		}
	}
`;
