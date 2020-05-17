import React from "react";
import styled from "styled-components";

export const Overlay = ({ toggleSidebar }) => {
	return (
		<StyledDiv
			className="content-container-overlay"
			onClick={toggleSidebar}
		></StyledDiv>
	);
};

const StyledDiv = styled.div`
	z-index: 1; /* Arbitrary. It just needs to go over .content-container */
	position: absolute;
	display: none;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0);
	&.active {
		background-color: rgba(0, 0, 0, 0.25);
	}
	transition: all 0.3s linear;
`;
