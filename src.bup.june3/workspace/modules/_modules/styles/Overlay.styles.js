import styled from "styled-components";

export const OverlayStyled = styled.div`
	z-index: 1;
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
