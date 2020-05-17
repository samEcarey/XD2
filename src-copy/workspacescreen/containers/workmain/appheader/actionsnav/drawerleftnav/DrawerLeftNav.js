import React, { useState } from "react";
import { Flex } from "../../../../../../appdesign";
import { Drawer, Toggle } from "./components";
import { EdsHatIcon } from "./assets";

export function DrawerLeftNav({ children }) {
	const [drawerLeftNavOpen, setDrawerLeftNavOpen] = useState(false);

	const handleToggle = () => {
		setDrawerLeftNavOpen(!drawerLeftNavOpen);
	};

	return (
		<>
			<Drawer className="Drawer-leftnav" drawerLeftNavOpen={drawerLeftNavOpen}>
				<Flex.ColStart>
					<EdsHatIcon />
					<button onClick={() => setDrawerLeftNavOpen(false)}>Close</button>
				</Flex.ColStart>
				{children}
			</Drawer>
			<Toggle onClick={() => handleToggle()} />
		</>
	);
}
