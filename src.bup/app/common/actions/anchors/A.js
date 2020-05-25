import React from "react";

export const A = ({ children, href, title, target }) => {
	return (
		<a href={href} title={title} target={target}>
			{children}
		</a>
	);
};
