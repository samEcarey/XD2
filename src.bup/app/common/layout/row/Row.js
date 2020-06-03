import React from "react";
import { RowStyled } from "./Row.styles";

export const Row = ({ children, rowname, margin, padding }) => {
	return (
		<RowStyled className={rowname + "-row"} margin={margin} padding={padding}>
			<>{children}</>
		</RowStyled>
	);
};
