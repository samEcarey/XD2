import React from "react";
import classNames from "classnames";
import {
	FlexSC,
	FlexRowSC,
	FlexColSC,
	FlexRowStartSC,
	FlexRowCenterSC,
	FlexRowEndSC,
	FlexRowBetweenSC,
	FlexRowAroundSC,
	FlexColStartSC,
	FlexColCenterSC,
	FlexColEndSC,
	FlexColBetweenSC,
	FlexColAroundSC
} from "./styles/Flex.styles";

/** Kitchen Sink */
export function Flex({ classes, children, ...restProps }) {
	return (
		<FlexSC className={classNames("Flex", classes)} {...restProps}>
			{children}
		</FlexSC>
	);
}

/** Row */
Flex.Row = function FlexRow({ classes, children, ...restProps }) {
	return (
		<FlexRowSC className={classNames("Flex-row", classes)} {...restProps}>
			{children}
		</FlexRowSC>
	);
};

/** Column */
Flex.Col = function FlexCol({ classes, children, ...restProps }) {
	return (
		<FlexColSC className={classNames("Flex-column", classes)} {...restProps}>
			{children}
		</FlexColSC>
	);
};

/********************************************/
/** QUiCK Tools *****************************/

/** Row QUiCK Tools - jf-flex-start ai-center ac-center */
Flex.RowStart = function FlexRowStart({ classes, children, ...restProps }) {
	return (
		<FlexRowStartSC
			className={classNames("Flex-row-start", classes)}
			{...restProps}
		>
			{children}
		</FlexRowStartSC>
	);
};

/** Row QUiCK Tools - jf-center ai-center ac-center */
Flex.RowCenter = function FlexRowCenter({ classes, children, ...restProps }) {
	return (
		<FlexRowCenterSC
			className={classNames("Flex-row-center", classes)}
			{...restProps}
		>
			{children}
		</FlexRowCenterSC>
	);
};

/** Row QUiCK Tools - jf-flex-end ai-center ac-center */
Flex.RowEnd = function FlexRowEnd({ classes, children, ...restProps }) {
	return (
		<FlexRowEndSC
			className={classNames("Flex-row-end", classes)}
			{...restProps}
		>
			{children}
		</FlexRowEndSC>
	);
};

/** Row QUiCK Tools - jf-space-between ai-center ac-center */
Flex.RowBetween = function FlexRowBetween({ classes, children, ...restProps }) {
	return (
		<FlexRowBetweenSC
			className={classNames("Flex-row-between", classes)}
			{...restProps}
		>
			{children}
		</FlexRowBetweenSC>
	);
};

/** Row QUiCK Tools - jf-space-around ai-center ac-center */
Flex.RowAround = function FlexRowAround({ classes, children, ...restProps }) {
	return (
		<FlexRowAroundSC
			className={classNames("Flex-row-around", classes)}
			{...restProps}
		>
			{children}
		</FlexRowAroundSC>
	);
};

/** Column QUiCK Tools - jf-flex-start ai-center ac-center */
Flex.ColStart = function FlexColStart({ classes, children, ...restProps }) {
	return (
		<FlexColStartSC
			className={classNames("Flex-col-start", classes)}
			{...restProps}
		>
			{children}
		</FlexColStartSC>
	);
};

/** Column QUiCK Tools - jf-center ai-center ac-center */
Flex.ColCenter = function FlexColCenter({ classes, children, ...restProps }) {
	return (
		<FlexColCenterSC
			className={classNames("Flex-col-center", classes)}
			{...restProps}
		>
			{children}
		</FlexColCenterSC>
	);
};

/** Column QUiCK Tools - jf-flex-end ai-center ac-center */
Flex.ColEnd = function FlexColEnd({ classes, children, ...restProps }) {
	return (
		<FlexColEndSC
			className={classNames("Flex-col-end", classes)}
			{...restProps}
		>
			{children}
		</FlexColEndSC>
	);
};

/** Column QUiCK Tools - jf-space-between ai-center ac-center */
Flex.ColBetween = function FlexColBetween({ classes, children, ...restProps }) {
	return (
		<FlexColBetweenSC
			className={classNames("Flex-col-between", classes)}
			{...restProps}
		>
			{children}
		</FlexColBetweenSC>
	);
};

/** Column QUiCK Tools - jf-space-around ai-center ac-center */
Flex.ColAround = function FlexColAround({ classes, children, ...restProps }) {
	return (
		<FlexColAroundSC
			className={classNames("Flex-col-around", classes)}
			{...restProps}
		>
			{children}
		</FlexColAroundSC>
	);
};
