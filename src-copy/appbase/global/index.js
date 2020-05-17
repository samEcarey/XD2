import React from "react";
import { Normalize } from "../vendors";
import { HtmlBody } from "./HtmlBody";
import { Fonts } from "./Fonts";
import { AnchorsStyles, ButtonsStyles } from "../actions";
import { HeadingsStyles } from "../atoms";
import { FiguresStyles, FormsStyles } from "../elements";

export function GlobalBaseStyles() {
	return (
		<>
			<Normalize />
			<HtmlBody />
			<Fonts />
			<HeadingsStyles />
			<AnchorsStyles />
			<FiguresStyles />
			<ButtonsStyles />
			<FormsStyles />
		</>
	);
}
