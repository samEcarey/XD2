import React from "react";
import { StyledBrandFigure } from "../../styles/AuthHeaderStyles";
import { IconEdsHat } from "app/assets";

export function AuthHeaderBrandArea() {
	return (
		<StyledBrandFigure className="brand-area">
			<IconEdsHat />
		</StyledBrandFigure>
	);
}
