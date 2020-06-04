import React, { useState, useEffect } from "react";
import { AppIconStyled } from "../styles";
import { SkeletonCircle, SkeletonCircleLoader } from "app/common";
import { IconEdsHat } from "app/assets"

export function AppIcon() {
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
		<AppIconStyled className="Workaside-appicon">
			{loading && <SkeletonCircleLoader />}
			{!loading && <IconEdsHat />}
		</AppIconStyled>
	);
}
