import React from "react";
import classNames from "classnames";
import { ContainerMenuGroupNavSC } from "../../styles";

export const containerMenuGroupNavFunc = function ContainerMenuGroupNav({
	classes,
	children,
	...restProps
}) {
	return (
		<ContainerMenuGroupNavSC
			className={classNames("Container-menugroupnav", classes)}
			{...restProps}
		>
			{children}
		</ContainerMenuGroupNavSC>
	);
};
