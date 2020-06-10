import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuGroupMenuStyled } from "../styles";
import { Workflows } from "../../workflows";

export function MenuGroupMenu({ one, two, three, four, SetOverlayMenugroup }) {
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
		<Workflows overlayWorkflow={overlayWorkflow} SetOverlayWorkflow={SetOverlayWorkflow} SetOverlayMenugroup={SetOverlayMenugroup} />
		</>
	);
}
