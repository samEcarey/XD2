import React from "react";
import classNames from "classnames";

export const compoundButtonInfo = function CompoundButtonInfo({
	classes,
	children,
	...restProps
}) {
	return (
		<button className={classNames("button-info", classes)} {...restProps}>
			{children}
		</button>
	);
};
