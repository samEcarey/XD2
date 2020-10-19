import React, { useContext, useEffect } from "react";

import { GlobalBaseStyles } from "app/common";
import { AppRoutes } from "app/config";
import {
	AppGlobalStateProvider,
	AuthContextProvider,
	ViewPortProvider
} from "app/data";

import { ThemeProvider } from "styled-components";
import { getTheme } from "./app/theme/getTheme";
import { AppContext } from "app/data";

import { I18nProvider } from "app/languages";
import { cookies } from "app/data/cookie";

function App() {
	const { state } = useContext(AppContext);
	//TODO: Consolidate all GlobalAppStates into one
	return (
		<I18nProvider locale={state.appLanguage}>
			<ThemeProvider theme={getTheme(state.themeName)}>
				<AppGlobalStateProvider>
					<ViewPortProvider>
						<AuthContextProvider>
							<div className="App">
								<GlobalBaseStyles />
								<AppRoutes />
							</div>
						</AuthContextProvider>
					</ViewPortProvider>
				</AppGlobalStateProvider>
			</ThemeProvider>
		</I18nProvider>
	);
}

export default App;
