import React from "react";
import classNames from "classnames";
import { GridSC } from "./styles";
import { gridWorkspaceFunc, gridAppHeaderFunc } from "./custom";

export function Grid({ classes, children, ...restProps }) {
	return (
		<GridSC className={classNames("Grid", classes)} {...restProps}>
			{children}
		</GridSC>
	);
}

/** Workspace */
Grid.Workspace = gridWorkspaceFunc;
Grid.AppHeader = gridAppHeaderFunc;
