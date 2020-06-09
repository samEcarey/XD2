import React from "react";
import { Normalize } from "../vendors";
import { HtmlBodyStyles } from "./htmlbody";
import { AStyled, ButtonStyles } from "../actions";
import { HRStyles, ImgStyled } from "../atoms";
import {
	BlockquoteStyles,
	CodeStyles,
	FigureStyles,
	FormFieldStyles,
	ListStyles,
	TableStyles
} from "../elements";
import { FontStyles, HeadingsStyles, TextStyles } from "../typography";

export function GlobalBaseStyles() {
	return (
		<>
			<Normalize />
			<HtmlBodyStyles />
			<AStyled />
			<ButtonStyles />
			<HRStyles />
			<HeadingsStyles />
			<ImgStyled />
			<TextStyles />
			<BlockquoteStyles />
			<FigureStyles />
			<FormFieldStyles />
			<ListStyles />
			<TableStyles />
			<CodeStyles />
			<FontStyles />
		</>
	);
}
