import React, { useContext } from "react";

import { GlobalBaseStyles } from "app/common";
import { AppRoutes } from "app/config";
import { AppGlobalStateProvider } from "app/data";

import { ThemeProvider } from "styled-components";
import { getTheme } from "./app/theme/getTheme";
import { AppContext } from "app/data";

import { I18nProvider } from "app/languages";

function App() {
	const { state } = useContext(AppContext);
	return (
		<I18nProvider locale={state.appLanguage}>
			<ThemeProvider theme={getTheme(state.themeName)}>
				<AppGlobalStateProvider>
					<div className="App">
						<GlobalBaseStyles />
						<AppRoutes />
					</div>
				</AppGlobalStateProvider>
			</ThemeProvider>
		</I18nProvider>
	);
}

export default App;
