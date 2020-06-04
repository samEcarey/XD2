import React from "react";
import classNames from "classnames";

export const compoundButtonLight = function CompoundButtonLight({
	classes,
	children,
	...restProps
}) {
	return (
		<button className={classNames("button-light", classes)} {...restProps}>
			{children}
		</button>
	);
};
