import React, { useState } from "react";
import { Flex } from "app/layout";
import { Drawer, FigureEdsHat } from "./components";
import { IconClose, IconToggle } from "./assets";

export function DrawerLeftNav({ children }) {
	const [drawerLeftNavOpen, setDrawerLeftNavOpen] = useState(false);

	const handleToggle = () => {
		setDrawerLeftNavOpen(!drawerLeftNavOpen);
	};

	return (
		<>
			<Drawer
				className="Drawer-workaside-mobile"
				drawerLeftNavOpen={drawerLeftNavOpen}
			>
				<nav className="Drawer-brandclose">
					<Flex.RowBetween>
						<FigureEdsHat />
						<button onClick={() => setDrawerLeftNavOpen(false)}>
							<IconClose />
						</button>
					</Flex.RowBetween>
				</nav>
				{children}
			</Drawer>
			<IconToggle onClick={() => handleToggle()} />
		</>
	);
}
