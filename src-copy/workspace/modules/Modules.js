import React from "react";
import { Link } from "react-router-dom";

export function Modules() {
	return (
		<section>
			<h1>Modules</h1>
			<ul>
				<li>
					<Link to="/workspace/modules/dashboard">Dashboard</Link>
				</li>
				<li>
					<Link to="/workspace/modules/tableapp">Tableapp</Link>
				</li>
			</ul>
		</section>
	);
}
