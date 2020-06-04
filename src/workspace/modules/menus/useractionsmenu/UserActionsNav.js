import React, { useState } from "react";
import { UserActionsNavStyled } from "./styles";
import { IconAddCircle, IconAddSquare, IconComfortable } from "./assets";
import { OverlayTablefull } from "../../overlaytablefull";

export const UserActionsNav = ({ children }) => {
	const [overlayTablefull, SetOverlayTablefull] = useState(false)
	return (
		<>
		<UserActionsNavStyled className="Workaside-useractionsnav">
			{children}
			<ul>
				<li>
					<IconAddSquare />
				</li>
				<li>
					<IconAddCircle />
				</li>
				<li>
					<IconAddSquare />
				</li>
				<li onClick={()=>SetOverlayTablefull(true)}>
					<IconComfortable />
				</li>
			</ul>
		</UserActionsNavStyled>

		{/* Overlay tableapp include with state */}
		<OverlayTablefull overlayTablefull={overlayTablefull} SetOverlayTablefull={SetOverlayTablefull} />
		</>
	);
};
