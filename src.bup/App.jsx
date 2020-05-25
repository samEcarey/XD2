import React, { useContext } from "react";

import { GlobalBaseStyles } from "app/common";
import { ScreenRoutes } from "app/config";
import { AppGlobalStateProvider } from "app/data";

import { ThemeProvider } from "styled-components";
import { getTheme } from "./app/theme/getTheme";
import { AppContext } from "context";

function App() {
	const { state } = useContext(AppContext);
	return (
		<ThemeProvider theme={getTheme(state.themeName)}>
			<AppGlobalStateProvider>
				<div className="App">
					<GlobalBaseStyles />
					<ScreenRoutes />
				</div>
			</AppGlobalStateProvider>
		</ThemeProvider>
	);
}

export default App;
