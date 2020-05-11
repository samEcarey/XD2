import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalBaseStyles } from "./appbase";
import { ScreenRoutes } from "./appsystem";
import { GlobalStateProvider } from "./appdata/components/useGlobalStateFunc";

function App() {
	return (
		<Router>
			<GlobalStateProvider>
				<div className="App">
					<GlobalBaseStyles />
					<ScreenRoutes />
				</div>
			</GlobalStateProvider>
		</Router>
	);
}

export default App;
