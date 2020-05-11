import React, { useState } from "react";
import { FlexDiv } from "../../flex";
import { Drawer, Toggle } from "./components";
import { EdsHatIcon } from "./assets";

export function DrawerLeftMobile({ children }) {
	const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);

	const handleToggle = () => {
		setLeftDrawerOpen(!leftDrawerOpen);
	};

	return (
		<>
			<Drawer className="Drawer-leftmobile" leftDrawerOpen={leftDrawerOpen}>
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
