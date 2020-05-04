import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function ScreenNavigation() {
	return (
		<nav>
			<StyledUL>
				<li>
					<Link to="/">Website</Link>
				</li>
				<li>
					<Link to="/auth">Authentication</Link>
				</li>
				<li>
					<Link to="/workspace">Workspace</Link>
				</li>
			</StyledUL>
		</nav>
	);
}

const StyledUL = styled.ul`
	display: flex;
	flex-direction: row;
	margin: 0rem 0rem 0rem 0rem;
	padding: 0.5rem;
	list-style: none;
	background: #f1f1f1;
	li {
		margin-right: 1rem;
		font-size: 1.2rem;
	}
`;
