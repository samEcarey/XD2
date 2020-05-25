import React from "react";
import classNames from "classnames";
import { ContainerSC } from "./styles";
import {
	containerWorkasideFunc,
	containerWorkmainFunc,
	containerAppHeaderFunc
} from "./custom";

export function Container({ classes, children, ...restProps }) {
	return (
		<section className={classNames("Container", classes)} {...restProps}>
			{children}
		</section>
	);
}

/** Workspace */
Container.Workaside = containerWorkasideFunc;
Container.Workmain = containerWorkmainFunc;
Container.AppHeader = containerAppHeaderFunc;
