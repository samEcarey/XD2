import React from "react";
import classNames from "classnames";
import { GridWorkheaderSC } from "../styles";

export const gridWorkheaderFunc = function GridWorkheader({
	classes,
	children,
	...restProps
}) {
	return (
		<GridWorkheaderSC
			className={classNames("Grid-workheader", classes)}
			{...restProps}
		>
			{children}
		</GridWorkheaderSC>
	);
};
