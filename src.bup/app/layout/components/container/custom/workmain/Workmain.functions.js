import React from "react";
import classNames from "classnames";
import { WorkmainSC } from "./Workmain.styles";

export const containerWorkmainFunc = function ContainerWorkmain({
	classes,
	children,
	...restProps
}) {
	return (
		<WorkmainSC
			className={classNames("Container-workmain", classes)}
			{...restProps}
		>
			{children}
		</WorkmainSC>
	);
};
