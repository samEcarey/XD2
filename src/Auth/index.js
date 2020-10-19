import React, { useContext } from "react";
import { StyledScreen, StyledWrapper, StyledGrid } from "./styles";
import { AuthHeader } from "./Header";
import { AuthMain } from "./Main";

export * from "./Header";
export * from "./Main";

export const Auth = (authState) => {
	return (
		<StyledScreen classes="Authentication-screen" type="auth">
			<StyledWrapper className="AuthWrapper">
				<StyledGrid className="Auth-grid">
					<AuthHeader />
					<AuthMain/>
				</StyledGrid>
			</StyledWrapper>
		</StyledScreen>
	);
};

