import React from "react";
import { UserLogOffNavStyled } from "./styles";
import { IconLogOff } from "./assets";
import { cookies } from "app/data";
import { useAuth } from "app/data";

export const UserLogOffNav = ({ children }) => {
	const auth = useAuth()
	return (
		<UserLogOffNavStyled className="Workaside-userlogoffnav">
			{children}
			<ul>
				<li>
					<a onClick={(event)=>{
						auth.modifyAuthState()
					}}>
						<IconLogOff />
					</a>
				</li>
			</ul>
		</UserLogOffNavStyled>
	);
};
