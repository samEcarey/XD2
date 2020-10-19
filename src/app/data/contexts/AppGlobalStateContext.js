import React, {createContext, useContext} from "react";

const appGlobalState = {
	apps:null,
	isFullscreen: false,
	fullscreenRef: null,
	appValue: '',
	moduleValue: '',
	moduleDescription:'',
	moduleMenus:[],
	currentAgencyID:"",
	currentJobList:"",
	moduleMenuGroups:[],
	moduleMenuGroupWorkflows:[],
	changedJobs:{}
};



export const ViewportContext = createContext();
const globalStateContext = createContext(appGlobalState);
const dispatchStateContext = createContext(undefined);

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
useContext(globalStateContext),
	useContext(dispatchStateContext)
];
