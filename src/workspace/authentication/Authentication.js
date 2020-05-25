import React, { useContext } from "react";
import { StyledScreen, StyledWrapper, StyledGrid } from "./_includes";

import { AuthHeader } from "./authheader";
import { AuthMain } from "./authmain";
// import { AuthAside } from "./authaside";
// import { AuthFooter } from "./authfooter";

export const Authentication = () => {
	return (
			<StyledScreen classes="Authentication-screen" type="auth">
				<StyledWrapper className="AuthWrapper">
					<StyledGrid className="Auth-grid">
						<AuthHeader />
						<AuthMain />
						{/* <AuthAside /> */}
						{/* <AuthFooter /> */}
					</StyledGrid>
				</StyledWrapper>
			</StyledScreen>
	);
};
