import React from "react";
import classNames from "classnames";

export const compoundButtonMedium = function CompoundButtonMedium({
	classes,
	children,
	...restProps
}) {
	return (
		<button className={classNames("button-medium", classes)} {...restProps}>
			{children}
		</button>
	);
};
