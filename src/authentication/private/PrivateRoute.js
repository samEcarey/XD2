import React from "react";
import { Route, Redirect } from "react-router-dom";
import { fakeAuth } from "./FakeAuth";

export function PrivateRoute({ children, ...rest }) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				fakeAuth.isAuthenticated ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/auth/login",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
}
