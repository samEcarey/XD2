import React from "react";
import { StyledAuthHeader } from "./styles";
import { BrandArea, Tagline, ValueProposition } from "./components";
import { IllForgotPassword001, IllSecureLogin001, IllAuthHeader } from "app/assets";

export const AuthHeader = () => {
	return (
		<StyledAuthHeader className="Authentication-header">
			<figure className="authheader-illustration">
				<IllAuthHeader />
			</figure>
			<BrandArea />
			<Tagline tagtop="Extra Duty" reg="®️" tagbottom="Done Right" />
			<ValueProposition
				lead="Extra Duty Support for Law Enforcement Agencies"
				message="We Administer Extra Duty Programs So You Can Focus On The Safety Of Your
				Citizens"
			/>
		</StyledAuthHeader>
	);
};
