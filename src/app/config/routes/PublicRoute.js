import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "app/data";

export const PublicRoute = ({ component: Component, restricted, authState, ...rest }) => {
	const auth = useAuth();
	return (
		<Route
			{...rest}
			render={props =>
				auth.authState && restricted ? (
					<Route render={() => <Redirect to={{ pathname: "/auth/login" }} />} />

				) : (
					<Component {...props} />
				)
			}
		/>
	);
};
