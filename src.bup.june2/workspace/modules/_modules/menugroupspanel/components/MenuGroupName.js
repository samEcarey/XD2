import React from "react";
import { Flex } from "app/layout";
import { IconArrowUp, IconArrowDown } from "../assets";

export function MenuGroupName({ menugroupfriendlyname, openMenuGroup, SetOpenMenuGroup }) {
	return (
		<Flex.RowStart className="MenuGroupNav-name">
			<h3>{menugroupfriendlyname}</h3>
			<span onClick={() => SetOpenMenuGroup(menugroupfriendlyname)}>
				{openMenuGroup === menugroupfriendlyname ? <IconArrowUp /> : <IconArrowDown/> } 
			</span>
		</Flex.RowStart>
	);
}
