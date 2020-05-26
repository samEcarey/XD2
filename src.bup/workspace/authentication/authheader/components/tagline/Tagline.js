import React from "react";
import { StyledTagline } from "./Tagline.styles";

export const Tagline = ({ tagtop, reg, tagbottom }) => {
	return (
		<StyledTagline className="tagline">
			<div class="tag-top">
				{tagtop}
				<sup>{reg}</sup>
			</div>
			<div className="hr"></div>
			<div className="tag-bottom">{tagbottom}</div>
		</StyledTagline>
	);
};
