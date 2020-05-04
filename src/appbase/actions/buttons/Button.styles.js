import { createGlobalStyle } from "styled-components";
import {
	INITIAL_COLOR,
	PRIMARY_COLOR,
	SECONDARY_COLOR
} from "../../../appdata";

export const ButtonsStyles = createGlobalStyle`
	.button,
	button,
	input[type='button'],
	input[type='reset'],
	input[type='submit'] {
		display: inline-block;
		margin-bottom: 1rem;
		/* padding: 0 3rem; */
		/* height: 3.8rem; */
		/* line-height: 3.8rem; */
		/* font-size: 1.1rem; */
		padding: 0 1.5rem; height: 2.8rem; line-height: 2.8rem; font-size: .8rem;
		font-weight: 700;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
		letter-spacing: 0.1rem;
		white-space: nowrap;
		cursor: pointer;
		color: ${INITIAL_COLOR};
		background-color: ${PRIMARY_COLOR};
		border: 0.1rem solid ${PRIMARY_COLOR};
		border-radius: 0.4rem;

		&:focus,
		&:hover {
			outline: 0;
			color: ${INITIAL_COLOR};
			background-color: ${SECONDARY_COLOR};
			border-color: ${SECONDARY_COLOR};
		}

		&[disabled] {
			cursor: default;
			opacity: 0.5;
			&:focus,
			&:hover {
				background-color: ${PRIMARY_COLOR};
				border-color: ${PRIMARY_COLOR};
			}
		}

		&.button-outline {
			background-color: transparent;
			color: ${PRIMARY_COLOR};
			&:focus,
			&:hover {
				color: ${SECONDARY_COLOR};
				background-color: transparent;
				border-color: ${SECONDARY_COLOR};
			}
			&[disabled] {
				&:focus,
				&:hover {
					color: ${PRIMARY_COLOR};
					border-color: inherit;
				}
			}
		}

		&.button-clear {
			color: ${PRIMARY_COLOR};
			background-color: transparent;
			border-color: transparent;
			&:focus,
			&:hover {
				color: ${SECONDARY_COLOR};
				background-color: transparent;
				border-color: transparent;
			}
			&[disabled] {
				&:focus,
				&:hover {
					color: ${PRIMARY_COLOR};
				}
			}
		}
	}
`;
