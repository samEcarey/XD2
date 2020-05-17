import React, { useContext } from "react";
import { ScreenContext } from "../contexts/ScreenContext";

const ScreenList = () => {
	const { screens } = useContext(ScreenContext);
	return screens.length ? (
		<div>
			<ul>
				{screens.map(screen => {
					return (
						<li key={screen.id}>
							{screen.screenname} {screen.path}
						</li>
					);
				})}
			</ul>
		</div>
	) : (
		<div>Empty Screens</div>
	);
};

export default ScreenList;
