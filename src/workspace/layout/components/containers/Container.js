import React from "react";
import classNames from "classnames";
import { ContainerSC } from "./styles";
import { containerWorkspaceFunc, containerWorkheaderFunc } from "./functions";

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
