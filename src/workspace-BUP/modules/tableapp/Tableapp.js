import React from "react";
// import { Switch, Route } from "react-router-dom";
import { Container, Card } from "../../../appbase";
import { A, Button } from "../../../appbase";
import { PageTitle } from "./components";
// import { SimpleTable } from "./simpletable";

export const Tableapp = () => {
	return (
		<Container className="Tableapp-container">
			<PageTitle>Tableapp</PageTitle>
			{/* <Switch>
				<Route exact path="/workspace/tableapp" component={SimpleTable} />
			</Switch> */}
		</Container>
	);
};
