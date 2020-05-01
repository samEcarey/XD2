import React from "react";

export const WebsiteLayout = ({ children }) => {
	return (
		<>
			<header>
				<h1>Website</h1>
			</header>
			<main>{children}</main>
		</>
	);
};
