import React from "react";
import classNames from "classnames";

export const compoundButtonWarning = function CompoundButtonWarning({
	classes,
	children,
	...restProps
}) {
	return (
		<button className={classNames("button-warning", classes)} {...restProps}>
			{children}
		</button>
	);
};
