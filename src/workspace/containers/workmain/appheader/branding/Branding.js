import React from "react";
import { BrandingNavStyled } from "./styles";
import { Flex } from "app/layout";
import { SkeletonCircle, SkeletonBone } from "app/common";

export function Branding() {
	return (
		<BrandingNavStyled className="Appheader-branding">
			<Flex.RowStart>
				<figure>
					<SkeletonCircle />
				</figure>
				<figure>
					<SkeletonBone />
				</figure>
			</Flex.RowStart>
		</BrandingNavStyled>
	);
}
