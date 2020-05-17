import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalBaseStyles } from "app/common";
import { ScreenRoutes } from "app/config";
import { GlobalStateProvider } from "app/packages";
import { DrawerStateProvider } from "app/data";

function App() {
	return (
		<Router>
			<GlobalStateProvider>
				<DrawerStateProvider>
					<div className="App">
						<GlobalBaseStyles />
						<ScreenRoutes />
					</div>
				</DrawerStateProvider>
			</GlobalStateProvider>
		</Router>
	);
}

export default App;
