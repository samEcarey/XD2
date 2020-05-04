import React, { createContext, useState } from "react";
import { v5 as uuidv5 } from "uuid";
import { Website } from "../../website";
import { Authentication } from "../../authentication";
import { Workspace } from "../../workspace";

export const ScreenContext = createContext();

export const ScreenContextProvider = props => {
	const [screens, SetScreens] = useState([
		{
			screenname: "Website",
			exact: true,
			routepath: "/",
			component: Website
		},
		{
			screenname: "Authentication",
			exact: false,
			routepath: "/auth",
			component: Authentication
		},
		{
			screenname: "Workspace",
			exact: true,
			routepath: "/workspace",
			component: Workspace
		}
	]);

	const addScreen = (screenname, routepath) => {
		SetScreens([
			...screens,
			{ screenname: screenname, routepath: routepath, id: uuidv5() }
		]);
	};

	const removeScreen = id => {
		SetScreens(screens.filter(screen => screen.id !== id));
	};

	return (
		<ScreenContext.Provider value={{ screens, addScreen, removeScreen }}>
			{props.children}
		</ScreenContext.Provider>
	);
};
