import React from "react";
import { Flex } from "app/layout";
import { IconMoreVertical } from "../assets";
import { MenuGroupNameStyled } from "../styles";

export function MenuGroupName({ menugroupfriendlyname }) {
	return (
		<MenuGroupNameStyled>
			<Flex.RowStart className="MenuGroupNav-name">
				<h3>{menugroupfriendlyname}</h3>
				<span><IconMoreVertical /></span>
			</Flex.RowStart>
		</MenuGroupNameStyled>
	);
}
