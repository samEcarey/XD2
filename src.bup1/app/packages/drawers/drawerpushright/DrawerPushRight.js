import React from "react";
import { EdsHatIcon } from "./assets";
import { Drawer, Toggle } from "./components";
import { useDrawerState } from "../context";

export function DrawerPushRight({ children }) {
	const [state, dispatch] = useDrawerState();

	const handleToggle = () => {
		dispatch({ leftPushDrawerOpen: !state.leftPushDrawerOpen });
	};

	return (
		<>
			<Drawer
				className="Drawer-pushright"
				leftPushDrawerOpen={state.leftPushDrawerOpen}
			>
				<div>
					<EdsHatIcon />
					<button onClick={() => handleToggle()}>Close</button>
				</div>
				{children}
			</Drawer>
			<Toggle onClick={() => handleToggle()} />
		</>
	);
}
