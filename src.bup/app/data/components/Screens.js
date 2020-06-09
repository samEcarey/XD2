import React, { useContext } from "react";
import { ScreenContext } from "../contexts/ScreenContext";

const Screens = () => {
	const { screens } = useContext(ScreenContext);
	return (
		<div className="-screen">
			<h1>Screens</h1>
			<p>You have {screens.length} screens</p>
		</div>
	);
};

export default Screens;
