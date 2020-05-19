import React, { useState, useEffect } from "react";
import { ApplicationModuleStyled } from "../styles";
import { SkeletonBone, SkeletonBoneLoader } from "app/common";

export function ApplicationModule() {
	return (
		<ApplicationModuleStyled>
			<SkeletonBone />
		</ApplicationModuleStyled>
	);
}
