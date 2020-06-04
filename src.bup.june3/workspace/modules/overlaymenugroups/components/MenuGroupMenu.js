import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconAngleDoubleRight, IconAdd } from "../assets";
import { MenuGroupMenuStyled } from "../styles";
import { OverlayWorkflows } from "../../overlayworkflows";

export function MenuGroupMenu({ one, two, three, four }) {
	const [overlayWorkflow, SetOverlayWorkflow] = useState(false)
	return (
		<>
		<MenuGroupMenuStyled className="MenuGroupNav-menu">
			<ul>
				<li>
					<Link to="/workspace" onClick={()=>SetOverlayWorkflow(true)}>{one}</Link>
				</li>
				<li>

					<Link to="/workspace" onClick={()=>SetOverlayWorkflow(true)}>{two}</Link>
				</li>
				<li>
					<Link to="/workspace" onClick={()=>SetOverlayWorkflow(true)}>{three}</Link>
				</li>
				<li>
					<Link to="/workspace" onClick={()=>SetOverlayWorkflow(true)}>{four}</Link>
				</li>
			</ul>
		</MenuGroupMenuStyled>

		{/* Overlay Workflow include with state */}
		<OverlayWorkflows overlayWorkflow={overlayWorkflow} SetOverlayWorkflow={SetOverlayWorkflow} />
		</>
	);
}
