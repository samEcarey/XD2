import React from "react";
import { useHistory } from "react-router-dom";
import { Screen } from "app/common";
import { AppnavSection, AppviewSection } from "./sections";
import { ScreenNavigation } from "../app/config";
import { fakeAuth, AuthSignOut } from "../authentication";

export function Workspace() {
	let history = useHistory();
	return (
		<Screen className="Workspace-screen" type="workspace">
			<div className="canvi-navbar"></div>
			<div className="canvi-content"></div>
			<ScreenNavigation />
			{fakeAuth.isAuthenticated ? <AuthSignOut /> : null}
			<AppnavSection />
			<AppviewSection />
		</Screen>
	);
}