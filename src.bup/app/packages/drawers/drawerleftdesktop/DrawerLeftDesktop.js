import React, { useState } from "react";
import { Drawer, Toggle } from "./components";
import { EdsHatIcon } from "./assets";

export function DrawerLeftDesktop({ children }) {
	const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);

	const handleToggle = () => {
		setLeftDrawerOpen(!leftDrawerOpen);
	};

	return (
		<>
			<Drawer className="Drawer-leftdesktop" leftDrawerOpen={leftDrawerOpen}>
				<div>
					<EdsHatIcon />
					<button onClick={() => setLeftDrawerOpen(false)}>Close</button>
				</div>
				{children}
			</Drawer>
			<Toggle onClick={() => handleToggle()} />
		</>
	);
}
