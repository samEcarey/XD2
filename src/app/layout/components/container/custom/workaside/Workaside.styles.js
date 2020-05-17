import styled from "styled-components";
import { SKELETON_TINT } from "appdata";
import { breakpoints } from "app/common";

/* 
@media ${breakpoints.lg} {}
background: red;
*/

export const WorkasideSC = styled.aside`
	margin: 0rem 0rem 0rem 0rem;
	padding: 1rem 0rem 10rem 0rem;
	height: 100vh;
	border-right: 1px solid ${SKELETON_TINT};

	.Workaside-wrapper {
		height: 100%;
		.Workaside-lowersection {
			height: 100%;
		}
	}
`;
