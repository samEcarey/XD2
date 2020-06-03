import React from "react";
import { Link } from "react-router-dom";
import { IconAngleDoubleRight, IconAdd } from "../assets";

export function MenuGroupMenu({ one, two, three, four }) {
	return (
		<div className="MenuGroupNav-menu">
			<ul>
				<li>
					<IconAdd />
					<Link to="">{one}</Link>
				</li>
				<li className="active">
					<IconAdd />
					<Link to="">
						{two}
					</Link>
				</li>
				<li>
					<IconAdd />
					<Link to="">{three}</Link>
				</li>
				<li>
					<IconAdd />
					<Link to="">{four}</Link>
				</li>
			</ul>
		</div>
	);
}
