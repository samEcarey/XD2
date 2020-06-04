import React from "react";
import { StyledPill } from "./Pill.styles";

export function Pill({ children, size, rounded, outline }) {
	return (
		<StyledPill size={size} rounded={rounded} outline={outline}>
			{children}
		</StyledPill>
	);
}
