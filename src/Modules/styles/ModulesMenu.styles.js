import styled from "styled-components";
import {
	WHITE_COLOR,
	SECONDARY_COLOR,
	PRIMARY_SHADE,
	SECONDARY_SHADE,
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
	}`
export const ModulesMenuULStyled = styled.ul`
	margin: 0rem 0rem 0rem 0rem;
	padding: 0rem 0rem 0rem 0rem;
	list-style: none;
	width: 100%;
	text-align: center;
	border-top: 1px solid ${PRIMARY_SHADE};
	border-bottom: 1px solid ${PRIMARY_SHADE};
	li {
		margin: 1rem;
		background: ${PRIMARY_SHADE};
		border-radius: 0.5rem;
		width: 5.6rem;
		height: 5.6rem;
		display: flex;
		justify-content: center;
		align-items: center;
		&.active,
		&:hover {
			background: ${GREY_950};
			a {
				svg {
					color: ${SECONDARY_SHADE};
					fill: ${SECONDARY_SHADE};
				}
			}
		}
		a {
			display: flex;
			justify-content: center;
			align-items: center;
			svg {
				width: 5rem;
				height: 5rem;
				color: ${GREY_700};
				fill: ${GREY_700};
			}
		}
	}
`;
