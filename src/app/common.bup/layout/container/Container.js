import React from "react";
import { ContainerStyled } from "./Container.styles";

export const Container = ({ children, containername, margin, padding }) => {
	return (
		<ContainerStyled
			className={containername + "-container"}
			margin={margin}
			padding={padding}
		>
			<>{children}</>
		</ContainerStyled>
	);
};
