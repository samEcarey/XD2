import React from "react";
import { Flex } from "app/layout";
import { BrandingStyled } from "./styles";
import { AppIcon } from "./components";

export function Branding() {
	return (
		<BrandingStyled className="Workheader-branding">
			<Flex.RowCenter>
				<AppIcon />
			</Flex.RowCenter>
		</BrandingStyled>
	);
}
