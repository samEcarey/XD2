import React, { useState, useEffect } from "react";
import { ApplicationBrandStyled } from "../styles";
import { SkeletonCircle, SkeletonCircleLoader } from "app/common";

export function ApplicationBrand() {
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
		<ApplicationBrandStyled>
			{loading && <SkeletonCircleLoader />}
			{!loading && <SkeletonCircle />}
		</ApplicationBrandStyled>
	);
}
