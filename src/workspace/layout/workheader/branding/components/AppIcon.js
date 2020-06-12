import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAppGlobalState } from "app/data";
import { AppIconStyled } from "../styles";
import { SkeletonCircleLoader } from "app/common";
import { IconEdsHat, IconEdsHatOutlined } from "app/assets";

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

	const [state, dispatch] = useAppGlobalState();
	const handleBrand = () => {
		dispatch({ appValue: "" });
		dispatch({ moduleValue: "" });
	};

	return (
		<AppIconStyled className="Workaside-appicon" onClick={handleBrand}>
			{loading && <SkeletonCircleLoader />}
			{!loading && (
				<NavLink to="/workspace">
					<IconEdsHatOutlined />
				</NavLink>
			)}
		</AppIconStyled>
	);
}
