import React from "react";
import { StyledAuthHeader, StyledBrandFigure } from "./styles";
import { Tagline, ValueProposition } from "./components";
import { IconEdsHat } from "app/assets";

export const AuthHeader = () => {
	return (
		<StyledAuthHeader className="Authentication-header">
			<StyledBrandFigure>
				<IconEdsHat />
			</StyledBrandFigure>
			<Tagline tagtop="Extra Duty" reg="®️" tagbottom="Done Right" />
			<ValueProposition
				lead="Extra Duty Support for Law Enforcement Agencies"
				message="We Administer Extra Duty Programs So You Can Focus On The Safety Of Your
				Citizens"
			/>
		</StyledAuthHeader>
	);
};
