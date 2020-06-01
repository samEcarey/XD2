import React from "react";
import { UserActionsNavStyled } from "./styles";
import { IconAddCircle, IconAddSquare, IconLogOff } from "./assets";

export const UserActionsNav = ({ children }) => {
	return (
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
				<li>
					<IconLogOff />
				</li>
			</ul>
		</UserActionsNavStyled>
	);
};
