import React from "react";
import { DashboardHeaderStyled } from "./styles";
import { DashboardHeaderTitle, Help  } from "./components"

export const DashboardHeader = props => {
	return (
		<DashboardHeaderStyled className="Dashboard-header">
			<DashboardHeaderTitle />
			<Help />
		</DashboardHeaderStyled>
	);
};
