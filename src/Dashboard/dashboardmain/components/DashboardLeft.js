import React from "react";
import { DashboardLeftStyled } from "../styles";
import { DashboardInfo } from "./DashboardInfo";
import { DashboardCards } from "./DashboardCards";


export const DashboardLeft = (props) => {
	return (
		<DashboardLeftStyled className="Dashboard-left">
			<DashboardInfo {...props} />
			<DashboardCards />
		</DashboardLeftStyled>
	);
};
