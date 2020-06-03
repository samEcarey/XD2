import React from "react";
import classNames from "classnames";

export const compoundButtonPrimary = function CompoundButtonPrimary({
	classes,
	children,
	...restProps
}) {
	return (
		<button className={classNames("button-primary", classes)} {...restProps}>
			{children}
		</button>
	);
};
