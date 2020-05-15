import React from "react";
import styled from "styled-components";

export const SidebarToggleButton = ({ toggleSidebar }) => {
	return (
		<StyledDiv className="sidebar-toggle-container">
			<button id="sidebar-toggle-button" onClick={toggleSidebar}></button>
		</StyledDiv>
	);
};

const StyledDiv = styled.div`
	position: absolute;
	top: 20px;
	left: 20px;
	z-index: 2;

	/* This needs to remain position: relative for the X. */
	button#sidebar-toggle-button {
		position: relative;
		height: 5rem;
		width: 5rem;
		cursor: pointer;
		background: transparent;
		border: none;
		border-radius: 5rem;
		box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 1);
		transition: all 0.15s linear;
		&:hover {
			background: BLACK;
			transform: scale(1.05);
			/* box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 1),
				-2px 2px 4px rgba(0, 0, 0, 0.75); */
			box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 1);
		}
		/* The X */
		&:before,
		&:after {
			position: absolute;
			content: "";
			background-color: WHITE;
			transition: all 0.5s ease;
		}
		/* The X */
		&:before {
			top: 1rem;
			left: 2.4rem;
			height: 3rem;
			width: 2px;
			border-radius: 1.5rem;
		}
		/* The X */
		&:after {
			top: 2.4rem;
			left: 1rem;
			height: 0.2rem;
			width: 3rem;
			border-radius: 1.5rem;
		}
	}
`;
