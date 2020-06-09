import React from "react";
import { useAppGlobalState } from "app/data";
import { UserWelcomeStyled } from "./styles";
import { UserInfo, BrandModule } from "./components";

export function UserWelcome({ children }) {
	const [state, dispatch] = useAppGlobalState();
	return (
		<UserWelcomeStyled className="Workheader-userwelcome">
			{state.appValue === '' ?
				<UserInfo />
			:
				<BrandModule />
			}
		</UserWelcomeStyled>
	);
}
