import styled from "styled-components";
import { breakpoints } from "../../../../../../appbase/utils";

export const BrandingNavStyled = styled.nav`
	figure {
		margin: 0rem 1.5rem 0rem 0rem;
		padding: 0;
		.Skeleton-circle {
			width: 8rem;
			height: 4.4rem;
		}
		.Skeleton-bone {
			margin-top: 0.4rem;
			width: 14rem;
			height: 2rem;
			@media ${breakpoints.lg} {
				width: 20rem;
				height: 2.4rem;
				margin-top: 0.2rem;
			}
		}
		/* background: red; */
	}
`;
