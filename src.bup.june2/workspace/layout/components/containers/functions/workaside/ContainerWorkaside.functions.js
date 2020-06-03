import React from "react";
import classNames from "classnames";
import { ContainerWorkasideSC } from "../../styles";

export const containerWorkasideFunc = function ContainerWorkaside({
	classes,
	children,
	...restProps
}) {
	return (
		<ContainerWorkasideSC
			className={classNames("Container-workaside", classes)}
			{...restProps}
		>
			{children}
		</ContainerWorkasideSC>
	);
};
