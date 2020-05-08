import React, { useState } from "react";
import { Toogle } from "./Toogle";
import { FlexDiv } from "../../flex";
import { Drawer } from "./Drawer";
import { BrandEdsHatIcon } from "./BrandEdsHatIcon";

const variants = {
	open: { x: 0 },
	closed: { x: "-100%" }
};

export function MobileLeftDrawer({ children }) {
	const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);

	const handleToggle = () => {
		setLeftDrawerOpen(!leftDrawerOpen);
	};

	return (
		<>
			<Drawer className="Drawer-mobileleft" leftDrawerOpen={leftDrawerOpen}>
				<FlexDiv justifyContent="space-between">
					<BrandEdsHatIcon />
					<button onClick={() => setLeftDrawerOpen(false)}>Close</button>
				</FlexDiv>
				{children}
			</Drawer>
			<Toogle onClick={() => handleToggle()} />
		</>
	);
}
