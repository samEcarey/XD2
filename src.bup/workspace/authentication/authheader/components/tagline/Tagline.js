import React from "react";
import { StyledTagline } from "./Tagline.styles";

export const Tagline = ({ tagtop, reg, tagbottom }) => {
	return (
		<StyledTagline class="tagline">
			<div class="tag-top">
				{tagtop}
				<sup>{reg}</sup>
			</div>
			<div class="hr"></div>
			<div class="tag-bottom">{tagbottom}</div>
		</StyledTagline>
	);
};
