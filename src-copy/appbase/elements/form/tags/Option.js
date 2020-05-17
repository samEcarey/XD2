import React from "react";
import { OptionStyled } from "../Forms.styles";

export const Option = ({ children, value }) => {
	return <OptionStyled value={value}>{children}</OptionStyled>;
};
