import React from "react";
import { UserLogOffNavStyled } from "./styles";
import { IconLogOff } from "./assets";

export const UserLogOffNav = ({ children }) => {
	return (
		<UserLogOffNavStyled className="Workaside-userlogoffnav">
			{children}
			<ul>
				<li>
					<IconLogOff />
				</li>
			</ul>
		</UserLogOffNavStyled>
	);
};
