import React from "react";
// import { Switch, Route } from "react-router-dom";
import { Card } from "../../../appbase";
import { PageTitle } from "./components";
// import { SimpleTable } from "./simpletable";

export const Tableapp = () => {
	return (
		<Card className="Tableapp-container">
			<PageTitle>Tableapp</PageTitle>
			{/* <Switch>
				<Route exact path="/workspace/tableapp" component={SimpleTable} />
			</Switch> */}
		</Card>
	);
};
