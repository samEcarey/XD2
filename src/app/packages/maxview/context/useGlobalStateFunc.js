import React from "react";

const defaultGlobalState = {
	isFullscreen: false,
	fullscreenRef: null
};

const globalStateContext = React.createContext(defaultGlobalState);
const dispatchStateContext = React.createContext(undefined);

export const GlobalStateProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(
		(state, newValue) => ({ ...state, ...newValue }),
		defaultGlobalState
	);
	return (
		<globalStateContext.Provider value={state}>
			<dispatchStateContext.Provider value={dispatch}>
				{children}
			</dispatchStateContext.Provider>
		</globalStateContext.Provider>
	);
};

export const useGlobalState = () => [
	React.useContext(globalStateContext),
	React.useContext(dispatchStateContext)
];
