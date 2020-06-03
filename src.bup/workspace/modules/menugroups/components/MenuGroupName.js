import React from "react";
import { Flex } from "app/layout";
import { IconFolderOpen } from "../assets";

export function MenuGroupName({ menugroupfriendlyname }) {
	return (
		<Flex.RowStart className="MenuGroupNav-name">
			{/* <IconFolderOpen /> */}
			<h3>{menugroupfriendlyname}</h3>
		</Flex.RowStart>
	);
}
