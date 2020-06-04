import React from "react";
import { Flex } from "app/layout";
import { BrandingStyled } from "./styles";
import { AppIcon, ApplicationBrand, ApplicationModule } from "./components";

export function Branding() {
	return (
		<BrandingStyled className="Workheader-branding">
			<Flex.RowCenter>
				<AppIcon />
				{/* <ApplicationBrand />
				<ApplicationModule /> */}
			</Flex.RowCenter>
		</BrandingStyled>
	);
}
