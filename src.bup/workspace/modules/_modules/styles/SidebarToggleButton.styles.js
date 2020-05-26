import styled from "styled-components";

export const SidebarToggleButtonStyled = styled.div`
	
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
	}
`;
