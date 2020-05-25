import React, { useState } from "react";
import { Toogle } from "./Toogle";
import { Flex } from "app/layout";
import { Drawer } from "./Drawer";
import { BrandEdsHatIcon } from "./BrandEdsHatIcon";



export function HelpDrawer({ children }) {
	

	const [helpDrawerOpen, setHelpDrawerOpen] = useState(false);

	const handleToggle = () => {
		setHelpDrawerOpen(!helpDrawerOpen);
	};

	return (
		<>
			<Drawer helpDrawerOpen={helpDrawerOpen}>
				<Flex.Row jc="between">
					<BrandEdsHatIcon />
					<button onClick={() => setHelpDrawerOpen(false)}>Close</button>
				</Flex.Row>
				{children}
			</Drawer>
			<Toogle onClick={() => handleToggle()} />
		</>
	);
}
