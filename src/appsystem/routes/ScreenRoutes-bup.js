import React, { useContext } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { AuthButton, PrivateRoute } from "../../authentication";
import { ScreenContext } from "../../appdata";

export const ScreenRoutes = () => {
	const { screens } = useContext(ScreenContext);
	return (
		<>
			<AuthButton />
			<ul>
				<li>
					<Link to="/">Website</Link>
				</li>
				<li>
					<Link to="/workspace">Workspace</Link>
				</li>
			</ul>
			<Switch>
				{screens.length ? (
					<>
						{screens.map((screen, index) => {
							return screen.protected ? (
								<PrivateRoute
									key={index}
									exact={screen.exact}
									path={screen.routepath}
									component={screen.component}
								/>
							) : (
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
		</>
	);
};
