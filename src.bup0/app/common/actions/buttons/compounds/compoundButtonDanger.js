import React from "react";
import classNames from "classnames";

export const compoundButtonDanger = function CompoundButtonDanger({
	classes,
	children,
	...restProps
}) {
	return (
		<button className={classNames("button-danger", classes)} {...restProps}>
			{children}
		</button>
	);
};
