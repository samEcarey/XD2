import React from "react";
import classNames from "classnames";
import { WorkasideSC } from "./Workaside.styles";

export const containerWorkasideFunc = function ContainerWorkaside({
	classes,
	children,
	...restProps
}) {
	return (
		<WorkasideSC
			className={classNames("Container-workaside", classes)}
			{...restProps}
		>
			{children}
		</WorkasideSC>
	);
};
