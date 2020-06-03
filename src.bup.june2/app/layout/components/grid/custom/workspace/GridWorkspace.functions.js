import React from "react";
import classNames from "classnames";
import { GridWorkspaceSC } from "./GridWorkspace.styles";

export const gridWorkspaceFunc = function GridWorkspace({
	classes,
	children,
	...restProps
}) {
	return (
		<GridWorkspaceSC
			className={classNames("Grid-workspace", classes)}
			{...restProps}
		>
			{children}
		</GridWorkspaceSC>
	);
};
