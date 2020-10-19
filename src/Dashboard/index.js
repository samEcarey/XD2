import React from "react";
import { DashboardStyled } from "./styles";
import { DashboardHeader } from "./Header"
import { DashboardMain } from "./dashboardmain"

export class Dashboard extends React.Component {

	render() {
		return (
			<DashboardStyled className="Dashboard">
				<DashboardHeader />
				<DashboardMain />
			</DashboardStyled>
		);
	}
}
