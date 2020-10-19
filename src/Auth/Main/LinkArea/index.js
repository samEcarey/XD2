import React from "react";
import { StyledLinksArea } from "../../styles";

import { LinkLogin } from "./LinkLogin";
import { LinkRegister } from "./LinkRegister";
import { LinkForgotPassword } from "./LinkForgotPassword";

import { AuthLinks } from "./AuthLinks";

export const AuthMainLinkArea = () => {
	return (
		<StyledLinksArea classname="Links-area">
			<ul>
				<AuthLinks />
			</ul>
		</StyledLinksArea>
	);
};

