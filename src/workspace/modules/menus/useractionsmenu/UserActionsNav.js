import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAppGlobalState } from "app/data";
import { UserActionsNavStyled } from "./styles";
import {
	IconAddSquare,
	IconComfortable,
	IconHeadphones,
	IconFileDocument
} from "./assets";
import { Tablefull } from "../../tablefull";

export const UserActionsNav = ({ children }) => {
	const [overlayTablefull, SetOverlayTablefull] = useState(false);

	const [state, dispatch] = useAppGlobalState();

	const handleModule = (appname, modulename) => {
		dispatch({ appValue: appname });
		dispatch({ moduleValue: modulename });
	};
	return (
		<>
			<UserActionsNavStyled className="Workaside-useractionsnav">
				{children}
				<ul>
					<li>
						<NavLink to="/workspace/extraduty/accounting" onClick={() => handleModule("ExtraDuty", "Accounting")}>
							<IconHeadphones />
						</NavLink>
					</li>
					<li>
						
						<a href="/workspace">
							<IconFileDocument />
						</a>
					</li>
					<li>
						<a href="/workspace">
							<IconAddSquare />
						</a>
					</li>
					<li onClick={() => SetOverlayTablefull(true)}>
						<Link to="/workspace">
							<IconComfortable />
						</Link>
					</li>
				</ul>
			</UserActionsNavStyled>

			{/* Overlay tableapp include with state */}
			<Tablefull
				overlayTablefull={overlayTablefull}
				SetOverlayTablefull={SetOverlayTablefull}
			/>
		</>
	);
};
