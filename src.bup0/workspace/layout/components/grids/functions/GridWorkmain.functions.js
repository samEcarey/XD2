import React from "react";
import classNames from "classnames";
import { GridWorkmainSC } from "../styles";

export const gridWorkmainFunc = function GridWorkspace({
	classes,
	children,
	...restProps
}) {
	return (
		<GridWorkmainSC
			className={classNames("Grid-workmain", classes)}
			{...restProps}
		>
			{children}
		</GridWorkmainSC>
	);
};
