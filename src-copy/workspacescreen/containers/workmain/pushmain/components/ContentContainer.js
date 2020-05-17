import React from "react";
import styled from "styled-components";

export const ContentContainer = props => {
	return <StyledDiv className="content-container">{props.children}</StyledDiv>;
};

const StyledDiv = styled.div`
	/* flex: 1; */
	/* margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 5rem 5rem 5rem; */
	width: 100%;
	height: 100%;
	color: WHITE;
	background-color: #232323;

	position: relative;
	margin: 0rem 0rem 0rem -30rem;
	padding: 5rem 5rem 5rem 5rem;
	transition: all 0.3s ease-in;

	&:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		-webkit-backdrop-filter: blur(0px);
		backdrop-filter: blur(0px);
		transition: all 0.3s ease-in;
	}
`;
