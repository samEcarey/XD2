import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalBaseStyles } from "./appbase";
import { ScreenContextProvider } from "./appdata";
import { ScreenRoutes } from "./appsystem";

function App() {
	return (
		<Router>
			<div className="App">
				<GlobalBaseStyles />
				<ScreenContextProvider>
					<ScreenRoutes />
				</ScreenContextProvider>
			</div>
		</Router>
	);
}

export default App;
