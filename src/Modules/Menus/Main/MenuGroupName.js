import React from "react";
import { Flex } from "app/layout";
import { IconMoreVertical } from "../assets";
import { MenuGroupNameStyled } from "../styles";

export function MenuGroupName({ menugroupfriendlyname, menugroupdescription }) {
	return (
		<MenuGroupNameStyled>
			<Flex.RowStart className="MenuGroupNav-name">
				<div style={{flex:"row"}}>
				<h3>{menugroupfriendlyname}</h3>
				<div>{menugroupdescription}</div>
				</div>
				
				<span>
					<IconMoreVertical />
				</span>
			</Flex.RowStart>
		</MenuGroupNameStyled>
	);
}
