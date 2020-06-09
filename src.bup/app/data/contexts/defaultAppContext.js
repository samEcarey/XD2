import React, { useReducer, createContext } from "react";
import defaultContext from "./defaultContext";

const AppContext = createContext();

let reducer = (state, action) => {
	switch (action.type) {
		case "setTheme":
			return { ...state, themeName: action.themeName };
		case "setLanguage":
			return { ...state, appLanguage: action.appLanguage };
		case "reset":
			return defaultContext;
	}
};

const AppContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, defaultContext);
	const value = { state, dispatch };

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
