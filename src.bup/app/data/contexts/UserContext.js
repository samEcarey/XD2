import React, { createContext, useState, useReducer } from "react";

export const UserContext = createContext();

const UserContextProvider = props => {
	const [authToken, dispatch] = useReducer({
		ifAuthToken: "sdfsdf"
	});

	return (
		<UserContext.Provider value={{ authToken }}>
			{props.children}
		</UserContext.Provider>
	);
};

export default UserContext;
