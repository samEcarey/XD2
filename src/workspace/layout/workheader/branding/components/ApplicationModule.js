import React from "react";
import { SkeletonBone } from "app/common";
import { ApplicationModuleStyled } from "../styles";

export function ApplicationModule() {
	return (
		<ApplicationModuleStyled>
			<SkeletonBone />
		</ApplicationModuleStyled>
	);
}
