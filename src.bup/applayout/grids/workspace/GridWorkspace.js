import React from "react";
import { GridWorkspaceStyled } from "./GridWorkspace.styles";

export const GridWorkspace = ({ children }) => {
	return <GridWorkspaceStyled className="grid">{children}</GridWorkspaceStyled>;
};
