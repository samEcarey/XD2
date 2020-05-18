import React from "react";
import { SkeletonCircle } from "app/common";
import { ApplicationBrandStyled } from "../styles";

export function ApplicationBrand() {
	return (
		<ApplicationBrandStyled>
			<SkeletonCircle />
		</ApplicationBrandStyled>
	);
}
