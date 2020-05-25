import React from "react";
import classNames from "classnames";

export const compoundButtonTertiary = function CompoundButtonTertiary({
	classes,
	children,
	...restProps
}) {
	return (
		<button className={classNames("button-tertiary", classes)} {...restProps}>
			{children}
		</button>
	);
};
