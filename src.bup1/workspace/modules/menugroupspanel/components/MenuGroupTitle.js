import React from "react";

/*
 * This is template for MenuGroups
 * BUT: This data comes from modules/menu
 */

export function MenuGroupTitle({ menugroupbrand, menugroupagent }) {
	return (
		<div className="MenuGroupNav-title">
			<h2>{menugroupbrand}</h2>
		</div>
	);
}
