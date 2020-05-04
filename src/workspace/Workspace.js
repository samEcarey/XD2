import React from "react";
import { Screen } from "../appbase";
import { AppnavSection, AppviewSection } from "./sections";
import { ScreenNavigation } from "../appsystem";

export function Workspace() {
	return (
		<Screen className="Workspace-screen" type="workspace">
			<div className="canvi-navbar"></div>
			<div className="canvi-content"></div>
			<ScreenNavigation />
			<AppnavSection />
			<AppviewSection />
		</Screen>
	);
}
