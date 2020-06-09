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
		</MenuGroupTitleStyled>
	);
}
