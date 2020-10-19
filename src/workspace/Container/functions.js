import React from "react";
import classNames from "classnames";
import {
	ContainerMenuGroupNavSC,
	ContainerWorkasideSC,
	ContainerWorkheaderSC,
	ContainerWorkmainSC,
	ContainerWorksectionSC,
	ContainerWorkspaceSC
} from "./styles";

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

export const containerWorkspaceFunc = function ContainerWorkspace({
	classes,
	children,
	...restProps
}) {
	return (
		<ContainerWorkspaceSC
			className={classNames("Container-workspace", classes)}
			{...restProps}
		>
			{children}
		</ContainerWorkspaceSC>
	);
};
