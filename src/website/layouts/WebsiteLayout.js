import React from "react";
import { H1 } from "../../appbase";

export const WebsiteLayout = ({ children }) => {
	return (
		<>
			<header>
				<H1>Website Comp</H1>
				<h1>Website</h1>
			</header>
			<main>{children}</main>
		</>
	);
};
