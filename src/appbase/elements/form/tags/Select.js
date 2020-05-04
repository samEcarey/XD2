import React from "react";
import { SelectStyled } from "../Forms.styles";

export const Select = ({ children, id, name }) => {
	return (
		<SelectStyled id={id} name={name}>
			{children}
		</SelectStyled>
	);
};
