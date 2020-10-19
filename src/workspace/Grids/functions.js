import React from "react";
import classNames from "classnames";
import { GridWorkheaderSC } from "./styles";
import { GridWorkmainSC } from "./styles";
import { GridWorksectionSC } from "./styles";
import { GridWorkspaceSC } from "./styles";

export const gridWorkheaderFunc = function GridWorkheader({
	classes,
	children,
	...restProps
}) {
	return (
		<GridWorkheaderSC
			className={classNames("Grid-workheader", classes)}
			{...restProps}
		>
			{children}
		</GridWorkheaderSC>
	);
};

export const gridWorkmainFunc = function GridWorkspace({
	classes,
	children,
	...restProps
}) {
	return (
		<GridWorkmainSC
			className={classNames("Grid-workmain", classes)}
			{...restProps}
		>
			{children}
		</GridWorkmainSC>
	);
};


export const gridWorksectionFunc = function GridWorksection({
	classes,
	children,
	...restProps
}) {
	return (
		<GridWorksectionSC
			className={classNames("Grid-worksection", classes)}
			{...restProps}
		>
			{children}
		</GridWorksectionSC>
	);
};

export const gridWorkspaceFunc = function GridWorkspace({
	classes,
	children,
	...restProps
}) {
	return (
		<GridWorkspaceSC
			className={classNames("Grid-workspace", classes)}
			{...restProps}
		>
			{children}
		</GridWorkspaceSC>
	);
};
