import React from "react";
import styled from "styled-components";
import { AppsMenu } from "../../../menus";

export function NavOne() {
	return (
		<nav className="Sidebar-navone">
			<AppsMenu />
		</nav>
	);
}

const StyledNav = styled.nav``;
