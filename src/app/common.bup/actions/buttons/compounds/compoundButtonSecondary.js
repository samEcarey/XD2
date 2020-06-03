import React from "react";
import classNames from "classnames";

export const compoundButtonSecondary = function CompoundButtonSecondary({
	classes,
	children,
	...restProps
}) {
	return (
		<button className={classNames("button-secondary", classes)} {...restProps}>
			{children}
		</button>
	);
};
