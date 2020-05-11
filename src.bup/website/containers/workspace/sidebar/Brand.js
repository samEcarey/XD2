import React from "react";
import styled from "styled-components";
import { LogoEdsHat } from "../../../../appsystem";

export function Brand() {
	return (
		<StyledFigure className="Sidebar-brand">
			<a href="#">
				<LogoEdsHat />
			</a>
		</StyledFigure>
	);
}

const StyledFigure = styled.figure`
	display: inline-block;
	margin: 0rem auto 1rem auto;
	padding: 0;
	a {
		padding: 1rem 0.5rem 0.5rem 0.5rem;
		background: blue;
		border-radius: 25px;
		&:hover {
			opacity: 0.5;
			box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 1);
			svg {
				opacity: 1;
			}
		}
		svg {
			fill: #fff;
			width: 34px;
		}
		display: block;
	}
`;
