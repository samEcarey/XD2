import React, { useState, useEffect } from "react";

const desktopImage = 10;
const mobileImage = 5;

export const VpFunc = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const imageUrl = windowWidth >= 650 ? desktopImage : mobileImage;

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleWindowResize);
		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<div className="VpFunc-test">
			<p>Viewport Test: {imageUrl}</p>
		</div>
	);
};
