import React from "react";
import styled from "styled-components";
import { GREY_500, WHITE_COLOR, PRIMARY_TINT } from "app/constants";

export const Toogle = props => (
	<StyledDiv {...props}>
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
				fill="currentColor"
			/>
		</svg>
	</StyledDiv>
);

const StyledDiv = styled.div`
	margin: 0rem 0rem 0rem 2rem;
	background-color: ${PRIMARY_TINT};
	color: ${WHITE_COLOR};
	border-radius: 1rem;
	height: 6rem;
	width: 7rem;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	position: relative;
	z-index: 4;
	svg {
		color: ${GREY_500};
		width: 3rem;
		height: 3rem;
		path {
		}
		&:hover {
			color: ${GREY_500};
		}
	}
`;
