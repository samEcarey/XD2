import React from "react";
import { Link } from "react-router-dom";
import { IconAngleDoubleRight } from "../assets";

export function MenuGroupMenu({ one, two, three, four }) {
	return (
		<div className="MenuGroupNav-menu">
			<ul>
				<li>
					{/* <IconAngleDoubleRight /> */}
					<Link to="">{one}</Link>
				</li>
				<li>
					{/* <IconAngleDoubleRight /> */}
					<Link to="" className="active">
						{two}
					</Link>
				</li>
				<li>
					{/* <IconAngleDoubleRight /> */}
					<Link to="">{three}</Link>
				</li>
				<li>
					{/* <IconAngleDoubleRight /> */}
					<Link to="">{four}</Link>
				</li>
			</ul>
		</div>
	);
}
