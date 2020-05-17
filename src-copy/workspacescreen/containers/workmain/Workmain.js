import React from "react";
import { AppHeader } from "./appheader";
import { DrawerPushMain } from "./pushmain";

import { ModuleAside } from "./moduleaside";
import { ModuleHeader } from "./moduleheader";
import { ModuleMain } from "./modulemain";

export function Workmain() {
	return (
		<>
			<AppHeader />
			<DrawerPushMain />
			{/* <ModuleAside /> */}
			{/* <ModuleHeader / */}
			{/* <ModuleMain /> */}
			<section className="Module-section"></section>
		</>
	);
}
