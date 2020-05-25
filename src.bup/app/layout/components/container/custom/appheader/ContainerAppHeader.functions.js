import React from "react";
import classNames from "classnames";
import { ContainerAppHeaderSC } from "./ContainerAppHeader.styles";

export const containerAppHeaderFunc = function containerAppHeader({
	classes,
	children,
	...restProps
}) {
	return (
		<ContainerAppHeaderSC
			className={classNames("Container-appheader", classes)}
			{...restProps}
		>
			{children}
		</ContainerAppHeaderSC>
	);
};
