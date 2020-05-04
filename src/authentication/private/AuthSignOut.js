import React from "react";
import { useHistory } from "react-router-dom";
import { fakeAuth } from "./FakeAuth";

export function AuthSignOut() {
	let history = useHistory();
	return (
		<p>
			Welcome!{" "}
			<button
				onClick={() => {
					fakeAuth.signout(() => history.push("/auth"));
				}}
			>
				Sign out
			</button>
		</p>
	);
}
