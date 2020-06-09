import React from "react";
import { DashboardLeftStyled } from "../styles"
import { DashboardInfo } from "./DashboardInfo"


export const DashboardLeft = (props) => {
	return (
		<DashboardLeftStyled className="Dashboard-left">
			<DashboardInfo {...props} />
		</DashboardLeftStyled>
	);
};
