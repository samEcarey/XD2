import styled from "styled-components";
import { Breakpoints } from "app/common"
import { PRIMARY_SHADE, PRIMARY_TINT, WHITE_COLOR, SUCCESS_SHADE, DANGER_COLOR, GREY_700, GREY_950 } from "app/constants"

export const DashboardInfoStyled = styled.div`
	padding: 3rem 1.5rem 2rem;
	display: flex;
	.Dashboard-info-details {
		display: flex;
		.info-icon {
			margin-right: 2rem;
			svg { font-size: 8rem; }
		}
		.info-details {
			h3 {
				text-transform: uppercase;
				margin: 0px;
				font-size: 2.2rem;
			}
			span {padding: 0.5rem 0; display: block; }
			p { font-size: 1.5rem; }
		}
	}
`;
