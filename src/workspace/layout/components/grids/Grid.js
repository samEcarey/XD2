import React from "react";
import classNames from "classnames";
import { GridSC } from "./styles";
import {
	gridWorkspaceFunc,
	gridWorkheaderFunc,
	gridWorksectionFunc
} from "./functions";

export function Grid({ classes, children, ...restProps }) {
	return (
		<GridSC className={classNames("Grid", classes)} {...restProps}>
			{children}
		</GridSC>
	);
}

/** Workspace */
Grid.Workspace = gridWorkspaceFunc;

/** Workheader */
Grid.Workheader = gridWorkheaderFunc;

/** Worksection */
Grid.Worksection = gridWorksectionFunc;
