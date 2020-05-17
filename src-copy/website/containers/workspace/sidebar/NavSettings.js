import React from "react";
import styled from "styled-components";
import { FaCog } from "react-icons/fa";

export function NavSettings() {
	return (
		<StyledNav className="Sidebar-settings">
			<a href="#">
				<FaCog />
			</a>
		</StyledNav>
	);
}

const StyledNav = styled.nav`
	svg {
	}
`;
