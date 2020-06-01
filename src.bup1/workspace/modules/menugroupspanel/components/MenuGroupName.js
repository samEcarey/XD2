import React from "react";
import { Flex } from "app/layout";
import { IconArrowUp, IconArrowDown } from "../assets";

export function MenuGroupName({ menugroupfriendlyname }) {
	return (
		<Flex.RowStart className="MenuGroupNav-name">
			<h3>{menugroupfriendlyname}</h3>
			<IconArrowUp />
		</Flex.RowStart>
	);
}
