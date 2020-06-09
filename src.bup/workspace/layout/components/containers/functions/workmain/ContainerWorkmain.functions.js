import React from "react";
import classNames from "classnames";
import { ContainerWorkmainSC } from "../../styles";

export const containerWorkmainFunc = function ContainerWorkmain({
	classes,
	children,
	...restProps
}) {
	return (
		<ContainerWorkmainSC
			className={classNames("Container-workmain", classes)}
			{...restProps}
		>
			{children}
		</ContainerWorkmainSC>
	);
};
