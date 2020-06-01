import styled from "styled-components";
import { WHITE_COLOR, PRIMARY_TINT } from "app/constants";

export const ModuleHeaderTitleStyled = styled.div`
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 1.5rem 0rem 1.5rem;
	background-color: ${PRIMARY_TINT};
	color: ${WHITE_COLOR};
	width: 88%;
    height: 6rem;
    display: flex;
	align-items: center;
	border-radius: 1rem;
	h2 {
		text-transform: uppercase;
		margin: 0px;
		font-size: 2.5rem;
	}	
`;
