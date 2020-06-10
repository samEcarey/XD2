import React, { useContext } from "react";
import { StyledScreen, StyledWrapper, StyledGrid } from "./_includes";

import { AuthHeader } from "./authheader";
import { AuthMain } from "./authmain";

export const Authentication = () => {
	return (
		<StyledScreen classes="Authentication-screen" type="auth">
			<StyledWrapper className="AuthWrapper">
				<StyledGrid className="Auth-grid">
					<AuthHeader />
					<AuthMain />
				</StyledGrid>
			</StyledWrapper>
		</StyledScreen>
	);
};
