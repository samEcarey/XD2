import React from "react";
import { Link } from "react-router-dom";
import { FigureEdsHatStyled } from "../styles";
import { IconEdsHat } from "../assets";

export const FigureEdsHat = () => {
	return (
		<FigureEdsHatStyled>
			<Link to="/workspace">
				<IconEdsHat />
			</Link>
		</FigureEdsHatStyled>
	);
};
