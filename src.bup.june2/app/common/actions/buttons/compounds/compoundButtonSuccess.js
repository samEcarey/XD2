import React from "react";
import classNames from "classnames";

export const compoundButtonSuccess = function CompoundButtonSuccess({
	classes,
	children,
	...restProps
}) {
	return (
		<button className={classNames("button-success", classes)} {...restProps}>
			{children}
		</button>
	);
};
