import React from "react";
import { StyledLinksArea } from "../../styles";

import { LinkLogin } from "./LinkLogin";
import { LinkRegister } from "./LinkRegister";
import { LinkForgotPassword } from "./LinkForgotPassword";

import { AuthLinks } from "./AuthLinks";

export const LinksArea = () => {
	return (
		<StyledLinksArea classname="Links-area">
			<ul>
				<AuthLinks />
			</ul>
		</StyledLinksArea>
	);
};
