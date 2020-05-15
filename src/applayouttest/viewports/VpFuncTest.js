import React, { useState, useEffect } from "react";

const desktopXxl = "XXL Dessktop";
const desktopXl = 1280;
const tabletLg = 1024;
const tabletMd = 768;
const mobileSm = 640;

export const VpFuncTest = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const $VPdesktopXxl =
		windowWidth >= 1281 && windowWidth <= 99999999999 ? desktopXxl : "";
	const $VPdesktopXl =
		windowWidth >= 1025 && windowWidth <= 1280 ? desktopXl : "";
	const $VPtabletLg = windowWidth >= 769 && windowWidth <= 1024 ? tabletLg : "";
	const $VPtabletMd = windowWidth >= 641 && windowWidth <= 768 ? tabletMd : "";
	const $VPmobileSm = windowWidth >= 0 && windowWidth <= 640 ? mobileSm : "";

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
			<p>Viewport XXL: {$VPdesktopXxl}</p>
			<p>Viewport XL: {$VPdesktopXl}</p>
			<p>Viewport LG: {$VPtabletLg}</p>
			<p>Viewport MD: {$VPtabletMd}</p>
			<p>Viewport SM: {$VPmobileSm}</p>
		</div>
	);
};
