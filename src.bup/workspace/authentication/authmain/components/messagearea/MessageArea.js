import React from "react";
import { StyledMessageArea } from "../../styles";

export const MessageArea = ({ children }) => {
	return (
		<StyledMessageArea classname="Message-area">{children}</StyledMessageArea>
	);
};
