import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { ScreenContext } from "../../appdata";

export const ScreenRoutes = () => {
	const { screens } = useContext(ScreenContext);
	return (
		<Switch>
			{screens.length ? (
				<>
					{screens.map((screen, index) => {
						return (
							<Route
								key={index}
								exact={screen.exact}
								path={screen.routepath}
								component={screen.component}
							/>
						);
					})}
				</>
			) : (
				<div>Empty Screens</div>
			)}
			{/* <Route exact path="/website" component={Website} /> */}
			{/* <Route exact path="/auth" component={Authentication} /> */}
			{/* <Route exact path="/workspace" component={Workspace} /> */}
		</Switch>
	);
};
