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
			{/* <StyledAuthMainGrid className="AuthMain-grid"> */}
			<TitleArea />
			<MessageArea>
				{fakeAuth.isAuthenticated ? <AuthSignOut /> : <AuthNotLoggedInMsg />}
			</MessageArea>
			<FormArea>
				<AuthRoutes />
				{/* <Redirect to="workspace/auth/login" /> */}
			</FormArea>
			<LinksArea />
			{/* </StyledAuthMainGrid> */}
		</StyledAuthMain>
	);
};
