import styled from "styled-components";
import { PRIMARY_SHADE, PRIMARY_COLOR } from "app/constants"

export const ContainerWorkasideSC = styled.aside`
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;

	display: flex;
	flex-flow: column;
	height: 100%;

	background-color: ${PRIMARY_COLOR};
	border: 1px solid ${PRIMARY_SHADE};
	border-top: 0px;
	.Flexflow-workaside {
		flex-grow: 1;
	}
	@media (min-width: 1280px) {}
`;
