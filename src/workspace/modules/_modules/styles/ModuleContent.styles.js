import styled from "styled-components";
import { PRIMARY_COLOR } from "app/constants"

export const ModuleContentStyled = styled.div`
	background-color: ${PRIMARY_COLOR};

	position: relative;
	margin: 0rem 0rem 0rem -30rem;
	padding: 1.3rem 2rem 1.3rem 2rem;
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
		display: none;
	}
`;
