import React from "react";
import { Flex } from "app/layout";
import { IconArrowUp, IconArrowDown } from "../assets";
import { MenuGroupNameStyled } from "../styles";

export function MenuGroupName({ menugroupfriendlyname, openMenuGroup, SetOpenMenuGroup }) {
	return (
		<MenuGroupNameStyled>
			<Flex.RowStart className="MenuGroupNav-name">
				<h3>{menugroupfriendlyname}</h3>
				<span onClick={() => SetOpenMenuGroup(menugroupfriendlyname)}>
					{openMenuGroup === menugroupfriendlyname ? <IconArrowUp /> : <IconArrowDown/> } 
				</span>
			</Flex.RowStart>
		</MenuGroupNameStyled>
	);
}
