import React from "react";
import { ModuleInfo } from "./ModuleInfo"
import { ModuleStepNavigation } from "./ModuleStepNavigation"

export const ModuleLeft = () => {
	return (
		<div className="Module-left">
			<ModuleInfo />
			<ModuleStepNavigation />
		</div>
	);
};
