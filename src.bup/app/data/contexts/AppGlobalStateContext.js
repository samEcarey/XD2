import React from "react";

const appGlobalState = {
	isFullscreen: false,
	fullscreenRef: null,
	isAgencyOverlay: false
};

const globalStateContext = React.createContext(appGlobalState);
const dispatchStateContext = React.createContext(undefined);

export const AppGlobalStateProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(
		(state, newValue) => ({ ...state, ...newValue }),
		appGlobalState
	);
	return (
		<globalStateContext.Provider value={state}>
			<dispatchStateContext.Provider value={dispatch}>
				{children}
			</dispatchStateContext.Provider>
		</globalStateContext.Provider>
	);
};

export const useAppGlobalState = () => [
	React.useContext(globalStateContext),
	React.useContext(dispatchStateContext)
];
