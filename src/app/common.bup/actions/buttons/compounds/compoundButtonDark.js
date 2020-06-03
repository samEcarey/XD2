import React from "react";
import classNames from "classnames";

export const compoundButtonDark = function CompoundButtonDark({
	classes,
	children,
	...restProps
}) {
	return (
		<button className={classNames("button-dark", classes)} {...restProps}>
			{children}
		</button>
	);
};
