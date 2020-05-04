import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalBaseStyles } from "./appbase";
import { ScreenContextProvider } from "./appdata";
import { ScreenRoutes, ScreenNavigation } from "./appsystem";

function App() {
	return (
		<Router>
			<div className="App">
				<GlobalBaseStyles />
				<ScreenNavigation />
				<ScreenContextProvider>
					<ScreenRoutes />
				</ScreenContextProvider>
			</div>
		</Router>
	);
}

export default App;
