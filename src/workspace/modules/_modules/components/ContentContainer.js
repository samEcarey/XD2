import React from "react";
import { ContentContainerStyled } from "../styles";

export const ContentContainer = props => {
	return <ContentContainerStyled className="content-container">{props.children}</ContentContainerStyled>;
};
