import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalBaseStyles } from "./appbase";
import { StyleGuide } from "./website";

function App() {
	return (
		<Router>
			<div className="App">
				<GlobalBaseStyles />
				<Switch>
					<Route exact path="/website/styleguide" component={StyleGuide} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
