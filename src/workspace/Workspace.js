import React from "react";
import { Screen } from "../appbase";
import { AppnavSection, AppviewSection } from "./sections";

export function Workspace() {
	return (
		<Screen>
			<div className="canvi-navbar"></div>
			<div className="canvi-content"></div>
			<AppnavSection />
			<AppviewSection />
		</Screen>
	);
}
