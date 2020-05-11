import React from "react";
import { GridArticleStyled } from "./GridArticle.styles";

export const GridArticle = ({ children, articlename, margin, padding }) => {
	return (
		<GridArticleStyled
			className={articlename + "-article"}
			margin={margin}
			padding={padding}
		>
			<>{children}</>
		</GridArticleStyled>
	);
};
