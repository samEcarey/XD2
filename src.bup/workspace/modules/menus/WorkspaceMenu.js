import React from "react";
import styled from "styled-components";

export function WorkspaceMenu() {
	return (
		<StyledUL>
			<li>
				<a href="">One</a>
			</li>
			<li>
				<a href="">Two</a>
			</li>
			<li>
				<a href="">Thr</a>
			</li>
		</StyledUL>
	);
}

const StyledUL = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;
