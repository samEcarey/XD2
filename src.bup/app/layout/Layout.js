import React from "react";
import classNames from "classnames";
// import { LayoutSC } from "./styles";
// import { layoutWorkspaceFunc, layoutAppHeaderFunc } from "./custom";

export function Layout({ classes, children, ...restProps }) {
	return (
		<section className={classNames("Layout", classes)} {...restProps}>
			{children}
		</section>
	);
}

/** Workspace */
// Layout.Workspace = layoutWorkspaceFunc;
// Layout.AppHeader = layoutAppHeaderFunc;
