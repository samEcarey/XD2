import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalBaseStyles } from "./appbase";
import { ScreenRoutes } from "./appsystem";

function App() {
	return (
		<Router>
			<div className="App">
				<GlobalBaseStyles />
				<ScreenRoutes />
			</div>
		</Router>
	);
}

export default App;
