import React from "react";
import { MenuGroupTitleStyled } from "../styles";

/*
 * This is template for MenuGroups
 * BUT: This data comes from modules/menu
 */

export function MenuGroupTitle({ menugroupbrand, menugroupagent }) {
	return (
		<MenuGroupTitleStyled className="MenuGroupNav-title">
			<h2>{menugroupbrand}</h2>
			<span className="datetime">9:00 am | June 1, 2020</span>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non eum itaque ipisicing elit dipisicing elit. </p>
		</MenuGroupTitleStyled>
	);
}
