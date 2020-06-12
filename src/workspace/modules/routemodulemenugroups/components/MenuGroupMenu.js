import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuGroupMenuStyled } from "../styles";


export function MenuGroupMenu({ one, two, three, four }) {

	function slugify(string) {
		return string
		  .toString()
		  .trim()
		  .toLowerCase()
		  .replace(/\s+/g, "-")
		  .replace(/[^\w\-]+/g, "")
		  .replace(/\-\-+/g, "-")
		  .replace(/^-+/, "")
		  .replace(/-+$/, "");
	}

	return (
		<>
		<MenuGroupMenuStyled className="MenuGroupNav-menu">
			<ul>
				<li>
					<NavLink to={`/workspace/extraduty/accounting/${slugify(one)}`}>{one}</NavLink>
				</li>
				<li>

					<NavLink to={`/workspace/extraduty/accounting/${slugify(two)}`}>{two}</NavLink>
				</li>
				<li>
					<NavLink to={`/workspace/extraduty/accounting/${slugify(three)}`}>{three}</NavLink>
				</li>
				<li>
					<NavLink to={`/workspace/extraduty/accounting/${slugify(four)}`}>{four}</NavLink>
				</li>
			</ul>
		</MenuGroupMenuStyled>
		</>
	);
}
