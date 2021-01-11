import styled from "styled-components";
import { Breakpoints } from "app/common"
import { PRIMARY_SHADE, PRIMARY_TINT, WHITE_COLOR, SUCCESS_SHADE, DANGER_COLOR,GREY_200, GREY_700, GREY_950 } from "app/constants"

export const DashboardCardsStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 1.5rem;
	.Card {
		background-color: ${PRIMARY_SHADE};
		border-radius: 1rem;
		padding: 1.5rem;
		margin: 0rem 0rem 1.5rem;
		display: flex;
		flex-direction: column;
		flex: 0 1 48%;
		@media ${Breakpoints.md} {
			flex-direction: row;
			flex: 0 1 49%;
		}
		.Card-figure {
			div
			 {
				vertical-align: middle;
				text-align: center;
				width:45px;
				height: 45px;
				border-radius: 100%;
				
				margin: 0 1rem 1rem 0;
			}
		}
		.Card-info {
			color: ${GREY_200};
			h3 {
				margin-bottom: 1rem;
			}
			p {

			}
		}
	}
`;
