import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { AuthRoutes } from "app/config";
import { fakeAuth, AuthSignOut, AuthNotLoggedInMsg } from "./private";
import { StyledAuthMain } from "./styles";

import { TitleArea, MessageArea, FormArea, LinksArea } from "./components";

export const AuthMain = () => {
	let history = useHistory();

	return (
		<StyledAuthMain className="Authentication-main">
			
			<TitleArea />
			<FormArea>
				<AuthRoutes />
			</FormArea>
			<LinksArea />
			<MessageArea>
				{fakeAuth.isAuthenticated ? <AuthSignOut /> : <AuthNotLoggedInMsg />}
			</MessageArea>
		
		</StyledAuthMain>
	);
};
