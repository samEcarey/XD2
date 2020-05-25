import React from "react";
import classNames from "classnames";
import { GridSC, GridTemplateSC } from "./Grid.styles";
// import { gridWorkspaceFunc, gridAppHeaderFunc } from "./custom";

export function Grid({ classes, children, ...restProps }) {
	return (
		<GridSC className={classNames("Grid", classes)} {...restProps}>
			{children}
		</GridSC>
	);
}
