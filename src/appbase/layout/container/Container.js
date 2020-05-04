import React from "react";
import { ContainerStyled } from "./Containers.styles";

export const Container = ({ children, type, padding }) => {
	return (
		<ContainerStyled type={type} padding={padding}>
			<>{children}</>
		</ContainerStyled>
	);
};
