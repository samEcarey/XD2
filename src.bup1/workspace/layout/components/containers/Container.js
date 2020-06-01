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

export function Container({ classes, children, bg, ...restProps }) {
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
Container.Workspace = containerWorkspaceFunc;

/** Workheader */
Container.Workheader = containerWorkheaderFunc;
/** Worksection */
Container.Worksection = containerWorksectionFunc;

/** Workaside */
Container.Workaside = containerWorkasideFunc;
/** Workmain */
Container.Workmain = containerWorkmainFunc;

/** Menus */
Container.MenuGroupNav = containerMenuGroupNavFunc;
