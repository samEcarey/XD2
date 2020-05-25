import React from "react";
import { StyledVP } from "./ValueProposition.styles";

export const ValueProposition = ({ lead, message }) => {
	return (
		<StyledVP>
			<div>
				<p>{lead}</p>
			</div>
			<small>
				<p>{message}</p>
			</small>
		</StyledVP>
	);
};