import React from "react";
import { Flex } from "app/layout";
import { AppIcon, ApplicationBrand, ApplicationModule } from "./components";

export function Branding() {
	return (
		<nav className="Workheader-branding">
			<Flex.RowStart>
				<AppIcon />
				<ApplicationBrand />
				<ApplicationModule />
			</Flex.RowStart>
		</nav>
	);
}
