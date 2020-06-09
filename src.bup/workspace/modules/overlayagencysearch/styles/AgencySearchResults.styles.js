import styled from "styled-components";
import { Breakpoints } from "app/common";
import { PRIMARY_SHADE, PRIMARY_COLOR, PRIMARY_TINT, WHITE_COLOR, DANGER_SHADE, GREY_500, GREY_950 } from "app/constants";

export const AgencySearchResultsStyled = styled.div`
	margin-top: 30px;
	ul {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		align-items: center;
		flex-wrap: wrap;
		margin: 0px 0px 0px 0px;
		padding: 0px 0px 0px 0px;
		list-style-type: none;
		li {
			display: grid;
			margin: 15px;
			color: ${WHITE_COLOR};
			background-color: ${PRIMARY_SHADE};
			opacity: 0;
			&.fire { background-color: ${DANGER_SHADE}; }
			span {
				display: block;
				margin: 0px 0px 0px 0px;
				padding: 20px 20px 20px 20px;
				width: 200px;
				height: 120px;
				text-transform: uppercase;
				font-size: 14px;
				&:hover {
					cursor: pointer;
					background-color: ${PRIMARY_COLOR};
					box-shadow: inset 0px 4px 8px -3px rgba(17,17,17,.6)
				}
				svg {
					width: 22px;
					margin: 0px auto;
					display: block;
					margin-bottom: 5px;
					fill: ${WHITE_COLOR};
				}
			}
		}
	}

	form.search-form { 
		/* Flashing Cursor */
		background: ${PRIMARY_COLOR};
		padding: 2rem;
		margin-top: -3rem;
		margin-bottom: 3rem;
		@media ${Breakpoints.lg} { display: none; }
		.form-group-search {
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
		.caret {
			height: 6rem;
			display: block;
			width: 100%;
			.caret-content {
				height: 100%;
				display: block;
				padding: 1rem 2rem;
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

	/*  Agency type filter */
	.form-group-radio {
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		margin-bottom: 20px;
		
		.radio-horizontal {
			display: flex;
			align-items: center;
			margin: 0 1rem;
			label { text-transform: capitalize; margin-bottom: 0px; color: #FFF; cursor: pointer; }
		}

		input[type="radio"] {
			margin: 0;
			padding: 0;
			-webkit-appearance: none;
			box-sizing: border-box;
			outline: none;
			color: ${PRIMARY_SHADE};
			text-transform: uppercase;
			border-width: 1px;
			border-radius: 2px;
			border-color: #a4a4a4;
			-webkit-transition: border-color 0.3s ease 0s;
			transition: border-color 0.3s ease 0s;
			border-style: solid;
			background-color: #a4a4a4;
			background-position: right center;
			background-repeat: no-repeat;
			margin-right: 5px;
			width: 16px;
			height: 16px;
			border-radius: 6px;
			cursor: pointer;
			display: inline-block;
			&:hover {
				background-color: #909090;
				border-color: #909090;
				border-radius: 8px;
			}
			&:checked {
				border-radius: 10px;
				background-color: ${PRIMARY_SHADE};
			}
		}
	}
`;
