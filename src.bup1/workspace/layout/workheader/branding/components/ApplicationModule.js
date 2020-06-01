import React, { useState, useEffect } from "react";
import { ApplicationModuleStyled } from "../styles";
import { SkeletonBone, SkeletonBoneLoader } from "app/common";

export function ApplicationModule() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// set the loading state to true for 3 seconds
		setLoading(true);
		const timer = setTimeout(() => {
			setLoading(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);
	return (
		<ApplicationModuleStyled>
			{loading && <SkeletonBoneLoader />}
			{!loading && <SkeletonBone />}
		</ApplicationModuleStyled>
	);
}
