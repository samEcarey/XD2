import React from "react";
import classNames from "classnames";
import { ContainerSC } from "./styles";
import {
	containerWorkspaceFunc,
	containerWorkheaderFunc,
	containerWorksectionFunc,
	containerWorkasideFunc,
	containerWorkmainFunc,
	containerMenuGroupNavFunc
} from "./functions";

export function WorkspaceContainer({ classes, children, bg, ...restProps }) {
	return (
		<ContainerSC
			className={classNames("Container", classes)}
			bg={bg}
			{...restProps}
		>
			{children}
		</ContainerSC>
	);
}

/** Workspace */
WorkspaceContainer.Workspace = containerWorkspaceFunc;

/** Workheader */
WorkspaceContainer.Workheader = containerWorkheaderFunc;
/** Worksection */
WorkspaceContainer.Worksection = containerWorksectionFunc;

/** Workaside */
WorkspaceContainer.Workaside = containerWorkasideFunc;
/** Workmain */
WorkspaceContainer.WorkspaceMain = containerWorkmainFunc;

/** Menus */
WorkspaceContainer.MenuGroupNav = containerMenuGroupNavFunc;

