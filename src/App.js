import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalBaseStyles } from "./appbase";
import { ScreenRoutes } from "./appsystem";
import { GlobalStateProvider } from "./appdata/components/useGlobalStateFunc";
import { DrawerStateProvider } from "./applayouttest";

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
