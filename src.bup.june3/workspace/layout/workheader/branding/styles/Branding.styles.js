import styled from "styled-components";
import { Breakpoints } from "app/common";
import { PRIMARY_SHADE, WHITE_COLOR } from "app/constants";

// @media ${Breakpoints.lg} {}

export const BrandingStyled = styled.figure`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	border: 1px solid ${PRIMARY_SHADE};
	border-bottom: 0px;
`;
