import React from "react";
import { ModuleAsideStyled } from "../styles";

export const ModuleAside = props => {
	return (
		<ModuleAsideStyled id="">
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
		</ModuleAsideStyled>
	);
};
