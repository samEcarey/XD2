import React from "react";
import classNames from "classnames";
import { ItemSC, ItemTemplateSC } from "./styles/Item.styles";

export function Item({ classes, children, ...restProps }) {
	return (
		<ItemSC className={classNames("Item", classes)} {...restProps}>
			{children}
		</ItemSC>
	);
}

/** Template */
Item.Template = function ItemTemplate({ classes, children, ...restProps }) {
	return (
		<ItemTemplateSC
			className={classNames("Item-template", classes)}
			{...restProps}
		>
			{children}
		</ItemTemplateSC>
	);
};
