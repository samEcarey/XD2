import React from "react";
import { SidebarStyled } from "../styles";

export const Sidebar = props => {
	return (
		<SidebarStyled id="">
			<div className="brand">{props.brand}</div>
			<ul>
				<li>
					<a href="#">Item 1</a>
				</li>
				<li>
					<a href="#">Item 2</a>
				</li>
				<li>
					<a href="#">Item 3</a>
				</li>
			</ul>
		</SidebarStyled>
	);
};
