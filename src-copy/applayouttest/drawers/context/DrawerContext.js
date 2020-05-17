import React, { createContext, useReducer, useContext } from "react";

const initialDrawerState = {
	leftPushDrawerOpen: false // state variable for WorkareaLeftPushDrawer
};

const drawerStateContext = createContext(initialDrawerState);
const dispatchDrawerStateContext = createContext(undefined);

export const DrawerStateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(
		(state, newValue) => ({ ...state, ...newValue }),
		initialDrawerState
	);
	return (
		<drawerStateContext.Provider value={state}>
			<dispatchDrawerStateContext.Provider value={dispatch}>
				{children}
			</dispatchDrawerStateContext.Provider>
		</drawerStateContext.Provider>
	);
};

export const useDrawerState = () => [
	useContext(drawerStateContext),
	useContext(dispatchDrawerStateContext)
];
