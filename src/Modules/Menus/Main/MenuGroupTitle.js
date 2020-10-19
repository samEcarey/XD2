import React from "react";
import { MenuGroupTitleStyled } from "../styles";

/*
 * This is template for MenuGroups
 * BUT: This data comes from modules/menu
 */

export function MenuGroupTitle({ menugroupbrand, menugroupdescription }) {
	return (
		<MenuGroupTitleStyled className="MenuGroupNav-title">
			<h2>{menugroupbrand}</h2>
			<span className="datetime">{menugroupdescription}</span>
		</MenuGroupTitleStyled>
	);
}
