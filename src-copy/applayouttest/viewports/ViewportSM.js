import React, { useState, useEffect } from "react";

const mobileSm = 640;

export const ViewportSM = ({ children }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const $VPmobileSm = "Test viewportsm!";

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleWindowResize);
		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	if (windowWidth >= 0 && windowWidth <= 640) {
		return (
			<>
				<p>Test: {$VPmobileSm}</p>
				{children}
			</>
		);
	}
};
