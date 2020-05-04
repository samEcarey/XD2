import React from "react";
import { CardStyled } from "./Cards.styles";

export const Card = ({ children, id, className }) => {
	return (
		<CardStyled className={className} id={id}>
			{children}
		</CardStyled>
	);
};
