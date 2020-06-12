import styled from "styled-components";
import { Breakpoints } from "app/common";
import {
	PRIMARY_SHADE,
	PRIMARY_TINT,
	SECONDARY_COLOR,
	COLOR_WHITE,
	WHITE_COLOR,
	GREY_400,
	GREY_700,
	GREY_950
} from "app/constants";

export const BrandModuleStyled = styled.div`
	display: flex;
	align-items: center;
	background-color: ${GREY_950};
	padding: 1rem;
	width: 100%;
	border-radius: 0.3rem;
	& > h3 {
		margin: 0;
		font-size: 2rem;
		color: ${WHITE_COLOR};
	}
	& > svg {
		width: 60px;
		height: 40px;
		fill: ${SECONDARY_COLOR};
		margin-right: 1rem;
		background-color: ${PRIMARY_SHADE};
		border-radius: 0.3rem;
		padding: 0.3rem;
	}
`;
