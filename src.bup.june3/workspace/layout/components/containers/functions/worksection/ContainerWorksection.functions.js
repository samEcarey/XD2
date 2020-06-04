import React from "react";
import classNames from "classnames";
import { ContainerWorksectionSC } from "../../styles";

export const containerWorksectionFunc = function ContainerWorksection({
	classes,
	children,
	...restProps
}) {
	return (
		<ContainerWorksectionSC
			className={classNames("Container-worksection", classes)}
			{...restProps}
		>
			{children}
		</ContainerWorksectionSC>
	);
};
