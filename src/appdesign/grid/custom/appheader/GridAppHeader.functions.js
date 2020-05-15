import React from "react";
import classNames from "classnames";
import { GridAppHeaderSC } from "./GridAppHeader.styles";

export const gridAppHeaderFunc = function GridAppHeader({
	classes,
	children,
	...restProps
}) {
	return (
		<GridAppHeaderSC
			className={classNames("Grid-appheader", classes)}
			{...restProps}
		>
			{children}
		</GridAppHeaderSC>
	);
};
