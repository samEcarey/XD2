import styled from "styled-components";

export const ModuleMainStyled = styled.article`
	.float-shadow {
		position: relative;
		box-shadow: 0 0 1px rgba(0, 0, 0, 0);
		transform: translateY(-20px);
	}

	.float-shadow:before {
		content: "";
		position: absolute;
		top: 100%;
		left: 7.5%; /* Assuming the width is 85%. */
		width: 85%;
		height: 1.5rem; /* was 10px */
		background: -webkit-radial-gradient(
			center,
			ellipse,
			rgba(0, 0, 0, 0.5) 0%,
			rgba(0, 0, 0, 0) 80%
		);
		background: radial-gradient(
			ellipse at center,
			rgba(0, 0, 0, 0.5) 0%,
			rgba(0, 0, 0, 0) 80%
		);
		transform: translateY(20px);
		z-index: -1;
	}
`;
