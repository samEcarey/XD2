import React from "react";
import { BrandingNavStyled } from "./styles";
import { Flex } from "../../../../../appdesign";
import { SkeletonCircle, SkeletonBone } from "../../../../../appbase";

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
