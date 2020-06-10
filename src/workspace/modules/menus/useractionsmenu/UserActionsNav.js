import React, { useState } from "react";
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
	return (
		<>
			<UserActionsNavStyled className="Workaside-useractionsnav">
				{children}
				<ul>
					<li>
						<IconHeadphones />
					</li>
					<li>
						<IconFileDocument />
					</li>
					<li>
						<IconAddSquare />
					</li>
					<li onClick={() => SetOverlayTablefull(true)}>
						<IconComfortable />
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
