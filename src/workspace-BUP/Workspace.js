import React from "react";
import { Link } from "react-router-dom";

export function Workspace() {
	return (
		<section className="Workspace-screen">
			<h1>Workspace</h1>
			<ul>
				<li>
					<Link to="/workspace/modules">Modules</Link>
				</li>
			</ul>
			{/* 
			<Sidebar />
			<Workarea />
			*/}
		</section>
	);
}
