import React from "react";
import classNames from "classnames";
import { ContainerWorkheaderSC } from "../styles";

export const containerWorkheaderFunc = function ContainerWorkheader({
	classes,
	children,
	...restProps
}) {
	return (
		<ContainerWorkheaderSC
			className={classNames("Container-workheader", classes)}
			{...restProps}
		>
			{children}
		</ContainerWorkheaderSC>
	);
};
