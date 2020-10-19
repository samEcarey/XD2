import React from "react";
import { useHistory } from "react-router-dom";
import { AuthRoutes } from "app/config";
import { fakeAuth, AuthSignOut, AuthNotLoggedInMsg } from "./private";
import { StyledAuthMain } from "../styles/AuthMainStyles";

import {AuthMainLinkArea} from './LinkArea'
import { AuthMainFormArea } from "./FormArea";
import { AuthMainMessageArea } from "./MessageArea";
import { AuthMainTitleArea } from "./TitleArea";

export * from "./Credit";
export * from "./FormArea";
export * from "./LinkArea";
export * from "./MessageArea";
export * from "./private";
export * from "./Register";
export * from "../styles/AuthMainStyles";

export const AuthMain = () => {
	let history = useHistory();

	return (
		<StyledAuthMain className="Authentication-main">
		
			<AuthMainFormArea>
				<AuthRoutes />
			</AuthMainFormArea>

			<AuthMainLinkArea />
			
		
		</StyledAuthMain>
	);
};


