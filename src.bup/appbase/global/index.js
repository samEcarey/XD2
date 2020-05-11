import React from "react";
import { Normalize } from "../vendors";
import { HtmlBody } from "./HtmlBody";
import { Fonts } from "./Fonts";
import { AnchorsStyles, ButtonsStyles } from "../actions";
import { HeadingsStyles } from "../atoms";

export function GlobalBaseStyles() {
	return (
		<>
			<Normalize />
			<HtmlBody />
			<Fonts />
			<HeadingsStyles />
			<AnchorsStyles />
			<ButtonsStyles />
		</>
	);
}
