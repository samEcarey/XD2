import React from "react";
import classNames from "classnames";
import { GridWorksectionSC } from "../styles";

export const gridWorksectionFunc = function GridWorksection({
	classes,
	children,
	...restProps
}) {
	return (
		<GridWorksectionSC
			className={classNames("Grid-worksection", classes)}
			{...restProps}
		>
			{children}
		</GridWorksectionSC>
	);
};
