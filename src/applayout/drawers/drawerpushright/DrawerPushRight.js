import React from "react";
import { FlexDiv } from "../../flex";
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
				<FlexDiv justifyContent="space-between">
					<EdsHatIcon />
					<button onClick={() => handleToggle()}>Close</button>
				</FlexDiv>
				{children}
			</Drawer>
			<Toggle onClick={() => handleToggle()} />
		</>
	);
}
