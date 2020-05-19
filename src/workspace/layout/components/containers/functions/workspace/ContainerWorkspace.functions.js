import React from "react";
import classNames from "classnames";
import { ContainerWorkspaceSC } from "../../styles";

export const containerWorkspaceFunc = function ContainerWorkspace({
	classes,
	children,
	...restProps
}) {
	return (
		<ContainerWorkspaceSC
			className={classNames("Container-workspace", classes)}
			{...restProps}
		>
			{children}
		</ContainerWorkspaceSC>
	);
};
