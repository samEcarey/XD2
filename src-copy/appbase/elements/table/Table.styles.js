import styled from "styled-components";
import { PRIMARY_COLOR, TERTIARY_COLOR, QUINARY_COLOR } from "../../../appdata";

export const StyledTable = styled.table`
	margin: 0rem auto 0rem auto;
	/* border-right: .1rem solid ${QUINARY_COLOR};
	border-left: .1rem solid ${QUINARY_COLOR}; */
	border-spacing: 0;
	/* width: 100%; */
	width: 85%;
`;

export const StyledCaption = styled.caption``;
export const StyledColgroup = styled.colgroup``;
export const StyledCol = styled.col``;

export const StyledTHead = styled.thead``;
export const StyledTBody = styled.tbody``;
export const StyledTFoot = styled.tfoot``;

export const StyledTR = styled.tr`
	&:nth-child(odd) {
		background-color: TRANSPARRENT;
	}
	&:nth-child(even) {
		background-color: ${TERTIARY_COLOR};
	}
`;

export const StyledTD = styled.td`
	padding: 1.2rem 1.5rem;
	text-align: left;
	border-bottom: 0.1rem solid ${QUINARY_COLOR};
	/* &:first-child { padding-left: 0; } */
	/* &:last-child  { padding-right: 0; } */
`;

export const StyledTH = styled.th`
	padding: 1.2rem 1.5rem;
	text-align: left;
	color: WHITE;
	font-weight: bold;
	background-color: ${PRIMARY_COLOR};
	border: 0.1rem solid ${PRIMARY_COLOR};
`;
