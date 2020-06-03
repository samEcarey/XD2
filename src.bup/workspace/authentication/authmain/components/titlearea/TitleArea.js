import React from "react";
import {
	IconEdsHat,
	IconEdsText,
	IconEdsTextBottom,
	IconEdsLogo
} from "app/assets";

import { StyledTitleArea } from "../../styles";

export const TitleArea = ({ children }) => {
	return (
		<StyledTitleArea classname="Title-area">
			<IconEdsLogo />
			{children}
		</StyledTitleArea>
	);
};
