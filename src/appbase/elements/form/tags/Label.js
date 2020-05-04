import React from "react";
import { LabelStyled } from "../Forms.styles";

export const Label = ({ children, htmlFor }) => {
	return <LabelStyled htmlFor={htmlFor}>{children}</LabelStyled>;
};
