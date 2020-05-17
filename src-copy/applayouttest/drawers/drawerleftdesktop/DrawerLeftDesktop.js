import React, { useState } from "react";
import { Drawer, Toggle } from "./components";
import { EdsHatIcon } from "./assets";
import { FlexDiv } from "../../flex";

export function DrawerLeftDesktop({ children }) {
	const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);

	const handleToggle = () => {
		setLeftDrawerOpen(!leftDrawerOpen);
	};

	return (
		<>
			<Drawer className="Drawer-leftdesktop" leftDrawerOpen={leftDrawerOpen}>
				<FlexDiv justifyContent="space-between">
					<EdsHatIcon />
					<button onClick={() => setLeftDrawerOpen(false)}>Close</button>
				</FlexDiv>
				{children}
			</Drawer>
			<Toggle onClick={() => handleToggle()} />
		</>
	);
}
